# pm2-deploy-example

## **1. PM2 설정**

### **_🔍 apps:_** 실행할 프로세스에 대한 설정

-   **name:** 프로세스 이름 (App name)

-   **script:** 실행할 파일

-   **log_date_format:** 로그에 기록되는 시간에 대한 포맷
    > 설정하지 않으면 시간이 기록되지 않는다.

&nbsp;

-   **out_file, error_file:** 로그 파일이 생성될 경로

-   **merge_logs, combine_logs:** 로그를 한 파일에 작성함. 프로세스를 여러 개 실행할 경우 로그 파일도 각각 생성되기 때문에 설정해야 함.

> 둘 중에 하나만 설정하면 된다. 같은 옵션이다.

&nbsp;

-   **instances:** 생성할 프로세스의 수. 0으로 설정하면 최대 갯수

-   **exec_mode:** 실행 모드. fork, cluster가 있음.

*   **interpreter:** 바벨 설정을 해야 한다면 여기에 babel-node의 경로를 적음.

> fork 모드에서만 사용할 수 있는 것 같다. cluster 모드에선 설정해도 안되서 트랜스파일 후에 실행시켰다.

&nbsp;
&nbsp;

### **_🔍 deploy:_** 배포 관련 설정

production, development, staging으로 나누어 설정할 수 있다.

-   user, host: 배포할 서버에 대한 정보 (user@host)

-   repo: 배포할 Github Repository의 SSH 주소

-   ref: 배포할 Branch

-   ssh_options: ssh 접속 관련 설정인거 같은데 잘 모르겠다.

-   path: 배포할 서버에서 소스가 내려받아질 경로

-   pre-setup, post-setup: pm2 deploy setup 시 전후에 실행할 스크립트

> Setup은 설정한 Repo를 내려받는 작업을 수행한다. pm2 deploy 시 해당 경로에서 실행할 파일을 찾기 때문에 Setup은 한번을 꼭 실행해야 한다.

&nbsp;

-   pre-deploy, post-deploy: pm2 deploy 시 전후에 실행할 스크립트

&nbsp;

&nbsp;

## 2. 명령어

### **_🔍 실행_**

```bash
    # 실행
    $ pm2 start app.js

    # 종료
    $ pm2 stop app

    # 제거
    $ pm2 delete app

    # 재시작
    $ pm2 restart app
    $ pm2 reload app

    # 새로운 모니터링인 것 같다.
    $ pm2 monit

    # 기존 모니터링인 것 같다.
    $ pm2 imonit

    # 설정 파일로 실행
    $ pm2 start config/ecosystem.config.js
```

&nbsp;

### **_🔍 배포_**

```bash
    # 설정한 Repo에서 소스 코드를 내려받는다.
    # pre-setup, post-setup으로 설정한 스크립트가 있다면 실행한다.
    $ pm2 deploy setup [설정파일] [production | development | staging]

    # 내려받아진 소스 코드를 확인하고 pre-deploy, post-deploy로 설정한 스크립트가 있다면 실행한다.
    $ pm2 deploy [설정파일] [production | development | staging]

    # 아래와 같이 직접 실행할 명령어를 실행할 수 있다.
    $ pm2 deploy exec  "ls -al"
```

&nbsp;

&nbsp;

**_❗Github에 ssh로 접속할 수 있도록 키를 설정한다._**

**_❗개발 PC와 배포 서버에도 키를 설정하여 인증없이 접속할 수 있도록 한다._**

**_❗ Docker는 snap으로 설치하면 안된다. 외부에서 docker 명령어를 호출할 수 없다._**

**_❗ 빌드하고 실행할 컨테이너가 많아지면 docker-compose나 쉘 스크립트를 고려한다._**
