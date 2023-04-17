package com.boot.reserveproject.controller;

import com.boot.reserveproject.domain.Board;
import com.boot.reserveproject.domain.BoardWithCommentsCount;
import com.boot.reserveproject.domain.Comments;
import com.boot.reserveproject.domain.Member;
import com.boot.reserveproject.service.BoardService;
import com.boot.reserveproject.service.CommentsService;
import com.boot.reserveproject.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller@RequiredArgsConstructor
public class BoardControllerMobile {
    private final BoardService boardService;
    private final MemberService memberService;
    private final CommentsService commentsService;



    @GetMapping("/mobile/board/boardList")
    private String showBoardList(Model model){
        List<BoardWithCommentsCount>boardList=boardService.findBoardWithCommentsCountByNo();
        model.addAttribute("boardList",boardList);
        return"mobile/board/boardList";
    }
    @GetMapping("/mobile/board/addBoard")
    private String addBoard(Model model){
    Long length= boardService.getBoardLength();
        System.out.println("length:"+length);
    if(length==0){
        model.addAttribute("no",1);
    }
    else{
        Optional<Board> board= boardService.getLastBoard();
        Long no=board.get().getNo();
        no++;
        model.addAttribute("no",no);
    }
        return"mobile/board/addBoard";
    }

    @PostMapping("/mobile/board/addBoardPro")

    private String addBoardPro(@RequestParam("id") String id,


                               @RequestParam("title") String title,
                               @RequestParam("content") String content,
                               @RequestParam("img") String img,
                               Model model){
        Board board=new Board();
        Member member= new Member();

        member=memberService.selectMemberById(id);
        board.setMember(member);

        board.setId(id);
        board.setTitle(title);
        board.setContent(content);

        board.setImg(img);

        boardService.createOrUpdateBoard(board);

        List<BoardWithCommentsCount>boardList=boardService.findBoardWithCommentsCountByNo();
        model.addAttribute("boardList",boardList);
        return"mobile/board/boardList";
    }
    @GetMapping("/mobile/board/showContent")
    private String showContent(Model model,@RequestParam("no") long no){

        Board board =boardService.findOneBoardByNo(no);
        Long readCnt=board.getReadCnt();
        readCnt++;
        System.out.println("조회수:"+readCnt);
        board.setReadCnt(readCnt);
        boardService.createOrUpdateBoard(board);
        model.addAttribute("board",board);
        List<Comments> newComments=commentsService.getCommentsByBoardNo(no);
        model.addAttribute("comments",newComments);
        return "mobile/board/showContent";
    }
    @GetMapping("/mobile/board/deleteBoard")
    private String deleteBoard(Model model,@RequestParam("no") long no){

        boardService.deleteBoard(no);
        List<BoardWithCommentsCount>boardList=boardService.findBoardWithCommentsCountByNo();
        model.addAttribute("boardList",boardList);
        return"mobile/board/boardList";
    }
    @GetMapping("/mobile/board/updateBoard")
    private String updateBoard(Model model,@RequestParam("no") long no){
        Board board=boardService.findOneBoardByNo(no);
        model.addAttribute("board",board);
        return"mobile/board/updateBoard";
    }
    @PostMapping("/mobile/board/updateBoardPro")
    private String updateBoardPro(Model model,@RequestParam("id") String id,
                                  @RequestParam("no") long no,
                                  @RequestParam("title") String title,
                                  @RequestParam("content") String content,
                                  @RequestParam("img") String img){
        Board board=boardService.findOneBoardByNo(no);
        Board newBoard=new Board();
        newBoard.setNo(board.getNo());
        newBoard.setId(board.getId());
        newBoard.setTitle(title);
        newBoard.setContent(content);
        newBoard.setReadCnt(board.getReadCnt());
        newBoard.setImg(img);
        newBoard.setDate(board.getDate());
        newBoard.setTime(board.getTime());
        boardService.createOrUpdateBoard(newBoard);
        board=boardService.findOneBoardByNo(no);
        model.addAttribute("board",board);
        List<Comments> newComments=commentsService.getCommentsByBoardNo(no);
        model.addAttribute("comments",newComments);
        return "mobile/board/showContent";
    }
    @PostMapping("mobile/board/postImg")
    @ResponseBody
    public ResponseEntity<String> uploadImg(@RequestParam("file") MultipartFile file) {
        // 파일 업로드 경로 설정
        String projectDir = new File("").getAbsolutePath(); // 프로젝트 디렉토리 경로를 가져옴
        String uploadDir = Paths.get(projectDir, "src", "main", "resources", "static", "img").toString(); // 업로드 경로를 설정함

        System.out.println(uploadDir);
        // 파일이름 중복 방지를 위한 유니크한 이름 생성
        String filename = UUID.randomUUID().toString() + "." + file.getOriginalFilename().split("\\.")[1];

        // 파일 저장
        Path filePath = Paths.get(uploadDir, filename);
        try {
            Files.write(filePath, file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Upload Failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        // 업로드된 파일 이름 반환
        return new ResponseEntity<>(filename, HttpStatus.OK);
    }
    public String getUploadDir() {
        Path currentPath = Paths.get(System.getProperty("user.dir"));
        Path uploadPath = currentPath.resolveSibling("src").resolve("main").resolve("resources").resolve("static").resolve("img");
        return uploadPath.toString();
    }
}
