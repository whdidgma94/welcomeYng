<h1>어서와Yng</h1>
▪ 주제 : 전국 캠핑장 검색 / 정보제공 사이트


▪ 사용 프로그램 : IntelliJ , MySQL , SpringBoot

▪ 제작시기 : 23.04.04 ~ 23.04.20 (2주)

▪ 기획의도 : 전국의 캠핑장에 대한 정보들을 손쉽게 원하는 방법으로 찾을 수 있으면 좋겠다는 생각으로 제작하게 되었습니다.
            PC와 모바일 환경에 맞추어 두가지 버전(PC: 어서와영, 모바일: 어서와양) 으로 나누어 제작 하였습니다.

▪ 기능

a. 캠핑장 정보 제공 : 고캠핑 오픈 API 를 활용하여 전국의 캠핑장(약 3000여개)의 정보를 제공 합니다.

b. 검색 기능 : 

              1. 네이버 지도 API를 활용해 지도를 조작하여 해당 구역에 있는 캠핑장을 검색 할 수 있습니다.

              2. 캠핑장 각각의 정보를 활용하여 카테고리로 검색 할 수 있습니다.
              
              3. 지역명 으로 검색 할 수 있습니다.

c. 게시판 기능:  MVC 패턴의 기본 CRUD 게시판을 구현하여 사용자들이 캠핑장 정보를 공유할 수 있도록 하였습니다.
<table><tr>
            <td><div>PC메인 화면</div></td>
            <td><img src="https://lh3.googleusercontent.com/fife/APg5EOae0NwFm6qdVReM6ZfrVvc8PDLN0P2DnLJEwIgQihb5SqPeEUL0CLwOfP8HuOzEh3gD5CEKSJ6GjHFrNJoCL2-xq17xTkNUZ18s_KpsJyL7G8ugHsE0bgV_wqF0WUsgvp6xjiAWUdTQlan8X9U2O3p3a3NpzQotUXO1ZYAAYx0TynNVFPD2Wj3iy4GDfdHNddA-gaMFo7OAlm-KyEhXR_IrVc2UFFKDAqhIDdQqzh4JdTnCSly3EJbsq2osVN3BEplKkQ7TEONnGiG6MNX-OtolgmIM_I9ziuygAsJ-X1Gutun811aNxQ_octhOlf6uV1s6bEtWE0gBYym5hKV60zJ7ZTt7JEmQM4wpb120tC74lystLnIk6zJDPOZn6ErYnDSFpF-CEK88qfxVSiqTusZXIjulw0N252-qlMfUEa_OGwXjFpeKbsJ13noXtdDbV1p4xZKX3Y6xG-2zLOWd8TQ7ZI36ko1UjDxxccIJ3Xxe2mNPtY0jcHLsgVKQjCNsjeQYM8wntUAxSEqgyqwmv7nb_kF2tvmRDLNoqxGaxkNxU5ZpFrODBPQc7eJjr38aL2G8bPtFPEfHJGUoHpxhUd6jbXUEwmWOJf7-qwbk1atoUKpO0FRlM_O2C0W9_JLX9fCfIwPN_9JKEVu24WtBI8eiJperVGHYpD-BadAfCX9XICTSK45QEML7xGk_o1s7JiCBF6bRP9qLpPJ2iW7oq_Cw0bOrht-DH6qfjUIq2zR_VOItNMeBVjmIUwycAEJeqnBMlponWXNSR7fEmJmeVsFFiLCMtn6GdR9Jg9Vru-rjSfMO3W-3M4D3wh8UmfclK8Ihxcv_woaEESM3iIofDNE2H0NReBGJVU_dCtstF4OLWUL1-8ftoFz8_9iN9zb_uExxq-Ja_MCrNvlauVVct25Pyd_FiPzjECEob95YmiIhbzMGml71nhE7x0BhFYp83ebkBlAbH_kKVtuVQCHElIhjYMhuGIVtr2rXnw653U9vrDKbxsoP6jP0Qc92FXhmto8kNy_qwnk228JgH_TAYzqhOt_bXe7rbXVow484MKIwds7uFVl6jc1ZHcSs1GgCFZj8iB4d5zPPOLGik6ODv4OtFYwgHePHCeyc4-E8Zc14sYUdH1x8rCUBkHFnzSmDs-yeYk4hxqXxlQ9FghIb5sPyJro9ptptgcWCO5gZFDBok_7DZLE714tCpWjOTZeLqfZn5_UbRATBe3I09wqwX8-GCNPiErsve1kn9iwVCKKgahHQn-x3Vl3OjpH5M1GMFm-FX216Ffwby8aWmF3SwYzizWNx4kcYaGPWO6KxFcqxOsvho2QL2KUcojrWqOI_7xYFVQi4YbzRHCkvDUXfeHL1IZo5PiNVzx5IksfnGmsSzSzadsDVcl1wRlCUTFiPpnsO5Wmx39nZ-JcAweGvG0lRQ2bfdDKoT31oGfNf-jf5ImRx6f3PxXhcmCE-TykHsellOwzBMcBrr9gwDUDA2aLVd6bjNFY6h0bvfWCIUpryLt0lr_FKDw=w2064-h969" width="500" height="500"/></td>
<tr>
<tr>
            <td><div>모바일메인 화면</div></td>
            <td><img src="https://lh3.googleusercontent.com/fife/APg5EOZiwAlNZ4CoY-WxlvXor5TxA5dEoHw7Ag-nTe9o22tpEJh1F1Vv6LUoj7U2y6w9GIGYURDPHNkRQmwIyALd-RDLrVRkF2U1Dg0T6LqYmF3ZC5d0-dTlzld9QvYouyX2yNMpxeGJFCdKkaifcRkNQQsTgDv6Pktqh-z8KmvvIGRBZmGRdhwBTBwdH7ZykQI981zztMpuY0AwBug4KDvdwkjUyJfBqL6dMvPvXXxO8FCxp5kCYpW88Ym-JCNExCLNxjssTMn6x53YUdCofaXseIbAIuir9oQZHc8Z-DyIIJzFihXQ13buorHx6uNTOVCZI-jYvwIj232gz31UYv0tTZ4U58uI6lqHTiuPeoADYS6cg6OFkOBu5DlDC5s0UL8jiuMAgmNjLvh4HTIllNoL7mP0bbQsvREQ7XiAj7-gH3Ep1hA_pQbQnJj44_J9MuE0vTYWS1xkQ55do9C1dIBqiGzc8geOEyB3hNGdLB5MclaI9kBj3eF2u2N8-V7MyEhNrxNogczAKrvSIurbu-qLlwzbvsZp6Cxl47o2Odps0p3NZ2TkRqcAMFsMrdI-k2U7KlqyQS9R5GzNbGltJ-3zIdEw2zZhbOy7VESHQYVIkkGQM46YnefShoJf2Xv43VDbsq58RkKnEXLC0OeEVJ1i1S_zFG3bDFUmgVdcbw9XafbB3-w42sSRMhe7hrLeJa-Ae1nHkOLGFTkaPo5gjjHXW--27Mg6ewJ0tkHk52PqW-lqFQGnFYdI-nILsOiysrh-A0ggklZOsTohl4AiBGeBoCzP1N7lS5yQMj3Z2ZukhNvxrFvp3t84S1W5POqL52WFNNEZcALtn9sj4sG6CZT3ixS8-TaB0K1WJqin20HvREN0MN4LXr_wqux1fz9Eui9ZL0__IbTJUNj0yqkWT8jDfRwHBzIRib2S5Q8fQmDUmHvxPMK5_A0mGFNiGxAiDImisT0Qv09JfHQfK56RAyXYHoxr_wyl-7q_Ph4db0hF9diNnMJMWo4_4LuBTfFXjGvFOOoTddnbOs4e7Pj6B-ywJylW77FNC0BppTq8RH-9j6OnAydF0MA14dFw8dxZfOVyp24Lew1b3qommI5VLFIvAYAJXUM3Ij4iBEUX0SCWw5MGPAtp4ztX3X0oggiW0LEzvQjQTvOpvLDi4D1yKS2J3FE-p2_vMiZEx1mRwLdvNhGgZuuaGHrYmqvBum8sMLZc_GUFqfETgChN5boBiQKfkCSyR7ZQQ4fn4LOsRWno-4gwZg_YCBxrP_Avs7cxEk5Jm295z4Ol96u52_a8gW_Le_0tsQ4Vz1nTGMXFJZfzE77fKe-7l7ysndhpB4S8Nz_UYjsBGf1hcwYwKXx0UJ5T-8gNkHnROpZt0cI91SWuuW5uxmUtT7p_MtTfs0MBqcoNXVyFlqbue8sEvTr42v5rw37Vt4MMGdpncOhkMFuwpWXYOpkncmWqQcAtEZ0jkKgnoulK8NW1aN-NGf27_CaHVp1fVa4Ba4A4QmzCc32bOkI4tkLK550YBQ=w2064-h969" width="300" height="600"/></td>
<tr>
<tr>
            <td><div>PC 지도 검색 화면</div></td>
            <td><img src="https://lh3.googleusercontent.com/fife/APg5EOa9S-LpTzhz0e4JaDokCkJx2wcxGVv5s420Of_H5udCgK7Gz1oglmXtCU0t0LLHtuOCz3VQARZxLppBVmEvT98JLZcjFvp6Le1r-fARfZv6ZEBi2_l1WsOwVPDbpllwqDoM2CGtoI_iN-Mkwv09rK86ZpGFAWdL-rM_j_P6T-KycLyzBJlBShXTjt1PVhYIepQtKjK-rpE2tb7d_a-vmI4g9WemFAnDGQtZpMXeQmcf7jpNnAdpBBUipSYJRqgLhnXvaHVLqj9tW61GPcco6fV7DTymj2iqT_aSA3vKS1fOTeuV0gXV-Svbnsi-vha4hphzkLVkbyj5MNwQqwcGFZVC29M5QMCkUNy0Oe1QUS19bagK0Am3LoRq-iS-h8JJH7d6M6gg4-dqjqGsOj1sBN40_onOSwr8PysqBRKQbTYnM12LZV3kh6oBOgCFvJRTVsFl-B2EM0jL7yp87kg_a3Wf7ULelcqIcO5byZU_4IUF-sgQcxCveJrCGHpAVTvH1zUA_PCGFzqTKoDWMNjI2VPKNG_cNFRy8rI-phYt0__grBv7_9XdTALZtNJQhuHIXbG3BXi7m81-Oaua85wpmCBZrbTpDHztRqu-BcM2uEdUQLjpgGbke_r3fVeKGdRSfv3kcF39yM7w7RZB5lJy7Mu4fV3yXlXcWpyznMgUhrqx-RK7GZce6HLC7-n6WM90QFXWv6C9wvlPMqp1J2p2jaXWXaPMi_0V_6AQTWBeXzJj7uk-7sj37HD0H-jlFZ6ZV5cwmELJkkmkiBqY2MBnlvKLarmvLzoJxstSdAbMKrL0ui7Nry7vER1ndHixZh9uUbLGCSgwo1re0qAytDo6hzC3umtcvwXVAOur-U50UmwTuxVQYK17UOKR09QeJBdPC_FWYl2Gtd_Jnnl2e94HJEBo6jJ-1UdWNnxoCg6pujVvmgykfokGJ_FKnvMYsBpJGslw_9ifnNgRKScnM7J8g9KSUxRfaqDAudjfBOq2sMzHBH8N9Y2YvFwNK4LTer1UM9LYR0cp07W9Urjj1U13om81S5J0ElSP_OU-NGG7azZ6XMJaVU8prcjeGS0prEmLkQvdmxGl1ITb7tDEyxo67ffq8ZmGT7MCsUtp_JS26_AeAE4Xlmjiwwf8zkjC5yTgVhK02GDX_9QC3sXqpO3219n9v8sduV1TgSEqywZ1xLuAG86phtg8vwLOYlf_Eh1tUaGsk8APgV-zzbHT4sXamibCdbE27R_1sYyUHxTcHvITcpgM0faCgBhJV4TnFeM_PdC3uo60rOzNyhBo90atm8RHa8Tel6DHWBWFsyu8tmq2MG_HU23iXQaAu9sVwjCLm5331ahvmVAJaTfRebmLgCSUR43rCAb9CPTt3D3Faju_K2rhCFJDFHSf2KymLKWvtMX-Rf0bEvhNsl51t7VtfBQPNmK6wus03ugGKasQoyLtd-PU3QwwwoZWzIj3LEbjmh_yZ4W4HbV7YKQg8vvSUGgCugA4eS-wKNrzpAiJbyD8yZEstUGqwg=w2560-h969" width="500" height="500"/></td>
</tr>
<tr>
            <td><div>모바일 지도 검색 화면</div></td>
            <td><img src="https://lh3.googleusercontent.com/fife/APg5EObHE7cZnxLXPOZevugxj7j84WvxPbehK3IkJ5nKGmNPgNJr2bniQGxaH1ahvuQMnKv58d-Ez6xcSHYKsKoZDedFlIBXxP7f9gYaDEsV-TgHqawvtRox912iPU0e0YkhraTIzrMD1v9r5qznf47lHKTw339yh-y-zvAO4EH-O5UQF9dAYQzAR1aOKZv0L8J1tfaPBJd_KWpSU0QtQDjijGdLCNhusnZxSYKKxtX9sFblZBT-q1caT5XUbAZCisYNtnGcdvb9lObW7tP9GfKc9Re0y3-dRLrYEFV8LhvbAnevxT6aQOuHG3mY67m2P-FgX-7gaLKsbYiOEDXlfEPk6JkKEQFdB2YwdkdueJf950ArRvb_frFzsAIF94vqA-r-kIMQQeTaCbFDptpUetylRZr5jYTAqmf4AbOPgyapv_fjG2eiwcQ8_Csif3W1yxpK3NjHisZy0fQkF0pg-kProm2LX8cSr8e4WOfcbnrxdTXDGgMFxYi01pFwaopaZe5Gcn7mNrY4I7B8Ggx4Fdln-6XZGfXGdlLi-VTRPy8f694p0fDynySgN4CeHZ6sbgdkFRTPM18Bdf3ED8pZqVmzeVb2Vnk3n8fclbT7YPdvAYEN7Xq6ME8-zXbX9FGuLiVpVjnszx5DNKVIy21-uo_LSe7R63GQ9E9W8RIHXI7nB_JYxCqr43HcrS3iCqAjM-uBxV7E-3cvb0GEbA2XCKAJZytKeCVprOuvrwGvHOQLdQx1CAG8YcKJHFINHtp3_IeuvtkpQNZVfyNf71JqDosC3Id9XUJONsNvc-ParPQVRmZNNOZd8TJZoxMaQilgNRzCCg6YGLiKKKWa4BlfO2ovCC7SJd1RNAnHqwVs6eEczuOCRC4ZAftrbmZ7H72eQoB7oNIJNQKMqet1sKawTcwD8aOAxTL1Zylo4TAE7H6wzuCszTcNLjRJtbbjZk-VGtF-49KoRHA9rMIsUjtIaUJfO2msQ-9LUb5yc7TmZsIEoc8S5iVKdvAbX_PY6-18i5FNBh_aQNiiB6UOwLmNPUjQuS9QLCq-Be-lPNG-eZmMVVnly2Z8lNJ7DRJT-hxI9RKF7RSkWFTv_ncrPh64wqySKs_2v-L43THGzRjtnn3nhFUc5YSX4_AOnxWbN4ZXK2LAvWrDAK_F91mPw3LRy2T4RZfTGRXKQHYKy3apktv_o6BmqtKVf0wcBVhTy_eCKKkt3FJ5EbtsUemtr-320hDwYijrtHtHb0ZAy1O5JbV5_05zc0sRb0J-S7znayKBL2jHDHRTdIrK9kZHfnvpn5RTG46psSifIOBrM0xOEOibrdf9AlPSevyINkj4qfzGzdLbYn5-_YBM_iIeTYvSsoykVLTosrijxA4zpU8tKPZwLCJpR0HUQKLWM4VGrIQN-utYtijdk-LW8mSa7_NgkwwEYfv2xBrf8xmB7daoxY8M1Or1o0oKfAxiAf7Fr6Dd-C6g0XvT76f63vtYvcslgyKPuDvXoapzC07gTrIIj_rCQg7YgY2GpUjvkw=w2064-h969" width="300" height="400"/></td>
</tr>
<tr>
            <td><div>PC 캠핑장 정보 화면</div></td>
            <td><img src="https://lh3.googleusercontent.com/fife/APg5EOZzBXC61BzH2DF__zY1LJN7F7bICMAM_R_Yjw3NWrBIjMXJUA9yg39QfGhwDE9FBbp7vsruVhCnzTPdyqNdpJkPZkeZeDJBN4pM1EsUilcEKjq3n0LPo_84YW51aCRvhfEIMrP6FN92wc8vmr8kvkUvzePRM-LuOChe30NgsqXnXpygkJiODF7VGEmMDUn3SNEaRcoeo5ttAIZgnPBt25zotLkIxtTNuQ38AD96KYFAe6w2fgVVWoouoK3Q6hEiY_9S3qIsWOBKWuSHkLjTw4F7y9rDR-pOX9vxnPAeUSFO0SxL3bgMvZygb5y7gXoc07-yp1Q1RBaE57W_zeF5AzJtQu-zlYDgfkLmI7DbGyOCBufM0O6onLEJHr_6C3pBSMTh2-mVqVGFzlqaen6deUErFmICDRASSKBKCTZfiKLYDJxd89Lyzmt0KcGBHm4o0GxBsW1o9-HaT8DuxyoskwKZu8BhYnqver2JEdUiFGiffk49QBGDPZrZcZzIIJIcZsUAnAbaAvPJbmpC2iJLCPAMft9wnXYrr1UYPhKDVb_HwvUzNO6Z2tObzQx71ga0_1g8blurBlMP5oeZ69jwAKsAZexVt4E5i_8yldPvx_dsQXgK-sUhkizv7CfZCkW_cLn5aSEnJ2hHYstQWhs3XO0xb2Jp12kZmMAHQPNTjhYFczDra-ouy7suDhdIaqaIsm5GUvBd0683UocN2bK0PkVSXNLL3gbbneDAXH-ov7wy4ikbbQnFZZQeKnoht9WOKwH29DIxndQhQw_EqMK2NSgxmPfC0wanyIDBAt_968PKBonfXEiebPgWTmvMJv2QfqHK04qXUAgj-XbneyBcqY0AH_hxSvbT53B9P6QArwLiQXSw1XYhzTU0EHFfBo7o5eS2iGWhsAttRoC96bSJacUnyf1TJFKHgIc7HLthAXlBmua-7BbCR_UzWJGjlnq3x1741kyqh1zGeVbr8yWwSxEBJFlfRApT1iT52TnelpeMqxSNp5Wc89GVLGmonMK9efZgujSM1WKfHL6uS9reGa7_XSnQU2rstFvVMNewBmk5yZUcGPwO88mYIBjqIbsQVgxt2dKannDyEbYJXg_ztBg5pAWqCu3WKeKMLbzhXrydtkiNtP-SgunkCA6HaOr3ZZKRWsncbw8xPmFtT1WS8fqPFNk7BY_iyP9-FJqaowFhC7kRl-VQ2g5kcSKXDP2zJvF7QBEC9kF5VDaviHRU_PBOJvw6vTwDoqJq2udHo8GmXz_UuS7QWXAyvlTh5WPOlXh3jIA5pMnhSokYXBan5JZ3o-ByEKH3cFIUHS4iezyIED8L-cgwlFdkZADtgAo8ZaTHoyJqCpcTdcEfUOXD77N7F-Mt893rsYVLG9wrxgyxJl8H0nV9BNS1mWR-bjZfE4wp7gcCMPFeAO-LJJ51sXYchW5MTxW47EUuZw49MFV_r-cxjlbVsp6UeSlK8RuNQ1H4M8JfeEqlOK18x9bjCfsX-Zdk2TyDaOHrNd0g_I3bnkDaVyJ7VQ=w2560-h969" width="500" height="500"/></td>
</tr>
<tr>
            <td><div>모바일 캠핑장 정보 화면</div></td>
            <td><img src="https://lh3.googleusercontent.com/fife/APg5EObPQJtxQPdLcn809Mb0hHXL_IcYo1o9YiEiWNRzysbqtN8dBdVl6qgzMSVuRsdZDpv9oUa34dZTNpLcHhGRZ_wEILcxn-9pyGeQQloGn4teT8BjfKEkGSr4hg-bPo-sI7uWc-P89YVvXtmkmw7zR-zYVeOzfjcYaaux0pmnO-AWyvXfYaxaWKAoa2HPM7W18MTtFh5UaKw0zP57p1RfgsISmjMkDtxKP8duooEp5MmkRNvB533f-jg6g8oErj0mlv20yzaRpJynjfKmlefgyEuPxRLRJ6ZAqpNxdM6sf-_pa04aEHWz4AKGrkB6Nd1Jf0V_zY32DNvMPZ09H0NWmwB6FM_-BKoZi5jxoB-uDIkl3qL4grilPuWH1tw2S4EhTvNo1l0WJvzc1FCwwmlWoPjQJ6YzcUR2W2W47FzFuNOiFhCwu3tQ5FODK3nlOjkr1-x3Ys53-bCAjEFKo5liolNTpIqrcm2Mx8yijNPk1wF85P9-UAkXti8CRY97e5By4hA3AssJBJ8CT9kSYReh4pKQKqHMoRF4dGyO_p8WaWnZgnqnD1e6y0UbcCvRgFVCSmakVhCFhKvkMSf-L0FauEF19m2CQQh_g3Yvxb5sKngQtJgTIVo1UyA5phdOt8WtYK4nkH4CDTW5aQVDsGRtbvGIi2PrLrzmgv2O0kIyqyp1j2Viu3yUsoW5AN9OuNsz6IbsCAGb4NQO7KMca75xhGbM7XfYVCADgaBnhtH26uVxOzX76lZnCGQ9MBtVS3z3cvFJImGibLIW-2PsBpPRujOO6es_b75ts6028rnRzXBMYVaXyptEFpDsjhY-cU-BW5YjdsYi3sk5xgqWdAV3_u60_wwMUq4WHny0UVImuo3zhL7SQ8kKLwxGVQbOuycNgRxrBCe1tn7cNjRsukFMYYFm1y2eFsOqVJFcjd0UN5lQOGhtywm89NctkVjQRif1BYgzQvtWzU5A1IfVca23YebKonBOZAJYEgD9hKmvQMQSMOHKjJQzXhbG73Ovy0k_BbW71Hgagf_BCC4b24WBGpOI62h3V8Raz41Gog5LSwDZUiUObLQ-8ywmTZZzlA-X2yHiptZ9hAuH64-3rnI1cVsPVcCTHTEhLxPBIABsH90HbD-S1umgbn1vymHN6smIGESrTegz9fxJSm2_ohRca5L1B1VZcDh3NgGn-7xE44jyeKIXiiS9BI_LEVBzzA3ZJz1lwKU6fioQGn9o0HDhkhAeR3_zU87UfYxOPfg5nAfpqGsGjbEJtzXFqG5h5aazxerHsecbFh6H3QZVgIB_BOwa-NFQYBOEZnDipnd4Ae3rn-KbZtf7LrSo3Wg1MBCq2koK5IG3iM6ENEYbmAKonFHKU7uuo-uzJS2cOuyhdjHi1nBPjLRZ-O19ccHlTV6tBVz2pAFts7jy9jE7EkgvMrzV3jifwzcLgogrRiSdPiFpV7GtL1wDdUx7POjZ2uod3foEQ9NIwuw10ugDncB33EmWzmiWklGrJNrlglW2BPXiEdSu8O3r9A=w2064-h969" width="300" height="600"/></td>
</tr>
</table>

