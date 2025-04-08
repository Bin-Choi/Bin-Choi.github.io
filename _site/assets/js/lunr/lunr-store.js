var store = [{
        "title": "네트워크 첫 걸음",
        "excerpt":"네트워크를 배우기 앞서 기초지식을 학습한다. 1.1 네트워크의 구조 1.1.1 컴퓨터 네트워크 컴퓨터 간의 네트워크를 연결한 것. 두 대만 연결되어 있어도 네트워크가 되고, 정보를 서로 주고받을 수 있다. 인터넷은 TCP/IP 프로토콜을 기반으로 전 세계적으로 연결되어있는 컴퓨터 네트워크 통신망을 말한다. 1.1.2 패킷 네트워크를 통해 전송되는 작은 데이터 조각 큰 데이터를 그대로 네트워크에...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network1/",
        "teaser": null
      },{
        "title": "네트워크의 기본 규칙",
        "excerpt":"네트워크 통신 규칙인 프로토콜에 대한 설명 2.1 네트워크의 규칙 2.1.1 프로토콜 컴퓨터 또는 전자기기 간의 원활한 통신을 위해 약속한 통신 규약 인터넷은 TCP/IP 프로토콜을 기반으로 전 세계적으로 연결되어있는 컴퓨터 네트워크 통신망을 말한다. 2.2.1 OSI 모델 ISO(국제표준화기구) 에서 정의한 네트워크 기술의 기본이 되는 모델 데이터 송수신은 컴퓨터에서 컴퓨터로 데이터를 전송하는 것....","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network2/",
        "teaser": null
      },{
        "title": "관계형 데이터베이스",
        "excerpt":"3.1 관계형 데이터베이스 3.1.1 데이터베이스 데이터란 간단히 말해서 컴퓨터로 어떤 일을 처리할 때 그 대상이 되는 것. 데이터는 그 자체로는 아무런 가치를 가지지 않는다. 가공하여 유용한 정보 를 얻어야 한다. 데이터베이스는 데이터를 일정한 체계에 따라 통합하여 디스크나 메모리에 저장한 것으로 응용프로그램에 종속적이지 않도록 만든 것 데이터베이스는 자료의 독립성, 중복 저장의...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/3_1",
        "teaser": null
      },{
        "title": "SELECT문 & 함수",
        "excerpt":"SQL문 작성지침 1. 대소문자를 구별하지 않음 SELECT 와 select는 동일하게 인식됨, 가독성을 위해 일반적으로 키워드(SELECT, FROM, WHERE 등)는 대문자로 작성하는 것이 관례 2. 여러 줄에 걸쳐 작성 가능 SQL문은 가독성을 위해 여러 줄에 걸쳐서 작성 가능 3. 키워드는 줄여 쓸수 없다 모든 키워드는 정확하게 작성해야 함 4. 세미콜론(;)으로 끝난다 반드시...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/3_2",
        "teaser": null
      },{
        "title": "WHERE, GROUP BY, HAVING, ORDER BY절",
        "excerpt":"WHERE절 특정 조건을 만족하는 행만을 대상으로 연산을 수행한다. SELECT뿐만 아니라, UPDATE, DELETE에도 사용할 수 있으나 INSERT에는 사용할 수 없다. FROM 절이 먼저 수행되므로 FROM절에서 정의한 별칭은 사용 가능하나 SELECT절에서 정의한 별칭은 사용할 수 없다. 비교연산자 단일행 비교연산자 =, &lt;, &lt;=, &gt;=, &gt; IS NULL : NULL 이면 참을 반환 다중행...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/3_3",
        "teaser": null
      },{
        "title": "JOIN",
        "excerpt":"조인 조인이란 두 개의 테이블을 하나로 병합하는 것 O(N2) 의 시간복잡도를 가짐 PK, FK의 연관성이 없이 논리적인 값들의 연관만으로도 성립 가능하다. FROM 테이블1 JOIN 테이블2 ON 조건식1 EQUI JOIN Equl(=), 등식을 조건으로 사용할 때 발생하는 조인. WHERE절의 조건이 등식인 경우에 발생한다. Non EQUI JOIN WHERE절의 조건이 등식이 아니라 부등식을 사용해서...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/3_4",
        "teaser": null
      },{
        "title": "SQL 활용(1)",
        "excerpt":"서브쿼리 함수가 들어갈 수 있는 위치에는 그 위치에 맞는 또 다른 독립적인 SQL문을 넣는 것이 가능하며 이를 서브쿼리라 한다. 서브 쿼리를 품고 있는 쿼리를 메인쿼리라고 부른다. 서브쿼리는 들어가는 위치에 따라 세 가지로 나눈다. 스칼라 서브쿼리 : SELECT 인라인 뷰 : FROM 중첩 서브쿼리 : WHERE, HAVING 메인쿼리의 칼럼 사용 여부에...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/4_1",
        "teaser": null
      },{
        "title": "SQL 활용(2)",
        "excerpt":"TOP N 쿼리 상위 N 순위까지를 추출하는 쿼리를 Top N 쿼리락고 한다. 기본적으로 순위함수를 사용해서 쿼리를 작성 ROWNUM 함수 ROWNUM 함수는 ROW_NUMBER 함수와 달리 현재 저장된 데이터를 그대로 두고 각 행에 순차적인 번호를 붙여주는 함수. 테이블의 첫 행부터 차례로 순회 중간을 건너 뛸 수 없음 WHERE절에 사용할 경우 조건식이 FALSE가...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/4_2",
        "teaser": null
      },{
        "title": "관리구문",
        "excerpt":"관리구문 DML 데이터를 조작하는 작업을 수행하는 명령어 이미 만들어져 있는 테이블에 레코드를 추가, 변경, 삭제하는 등 테이블의 데이터를 변경하는 작업을 수행한다. 데이터를 조작한다는 것은 기본적으로 읽기와 쓰기 작업을 의미함. DML 코드를 작성할 때 주의할 점은 자동커밋이 되지 않는다. 즉 명시적으로 커밋을 실행하기 전에는 작업을 되돌리는 것이 가능하며 데이터베이스에 접근하는 다른...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/5_1",
        "teaser": null
      },{
        "title": "SQL 추가 정리",
        "excerpt":"데이터 모델링의 이해 속성 업무에서 필요로 하는 인스턴스로 관리하고자 하는 의미상 더 이상 분리되지 않는 최소의 데이터 단위 엔티티의 분류 유무형에 따른 분류 유형엔티티 : 물리적인 형태가 있고, 안정적이며 지속적으로 활용되는 엔티티 개념엔티티 : 물리적인 형태는 존재하지 않고 개념적 정보로 구분되는 엔티티 사건엔티티 : 업무를 수행함에 따라 발생되는 엔티티로 비교적...","categories": ["Database"],
        "tags": ["tag1","tag2"],
        "url": "/database/sql/6",
        "teaser": null
      },{
        "title": "물리 계층",
        "excerpt":"OSI 1계층인 물리 계층에 대한 학습 물리 계층의 역할과 랜 카드의 구조 0과 1로 이루어진 데이터를 주고 받으려면 전기신호로 변환해야 한다. 전기 신호 전기 신호의 종류에는 아날로그 신호와 디지털 신호가 있다. 아날로그 신호는 물결 모양, 디지털 신호는 막대모양 파형을 가진다 아날로그 신호는 전화 회선이나 라디오 방송에 사용되는 신호 랜 카드...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network3",
        "teaser": null
      },{
        "title": "데이터 링크 계층",
        "excerpt":"데이터 링크 계층의 역할과 이더넷 랜에서 데이터를 주고받기 위해서 필요한 기술 데이터 링크 계층은 네트워크 장비 간에 신호를 주고받는 규칙을 정하는 계층 이더넷 일반적으로 가장 많이 사용되는 규칙 CSMA/CD 데이터가 동시에 케이블을 지나가면 충돌이 발생 데이터를 보내는 시점을 늦추어 충돌이 일어나지 않는 구조 CS는 데이터를 보내려고 하는 컴퓨터가 케이블에 신호가...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network4",
        "teaser": null
      },{
        "title": "네트워크 계층",
        "excerpt":"네트워크 계층의 역할 네트워크 간의 연결 구조 서로 다른 네트워크에 있는 목적지로 데이터를 전송하기 위해 필요한 기술을 가지고 있다. 데이터링크 계층의 기능만으로는 해당 네트워크 안에서만 통신이 가능하다 네트워크 간의 통신을 가능하게 하는 것이 네트워크 계층의 역할 라우터 데이터의 목적지가 정해지면 해당 목적지까지 어떤 경로로 가는 것이 좋은지를 알려 주는 기능...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network5",
        "teaser": null
      },{
        "title": "전송계층",
        "excerpt":"전송 계층의 역할 목적지에 신뢰할 수 있는 데이터를 전달하기 위해 필요한 계층 전송 계층 오류를 점검하는 기능 전송된 데이터의 목적지가 어떤 애플리케이션인지 식별하는 기능 연결형 통신과 비연결형 통신 전송 계층의 특징은 신뢰성/정확성과 효울성으로 구분할 수 있다. 연결형 통신 : 신뢰할 수 있고 정확한 데이터를 전달하는 통신 상대편과 확인해 가면서 통신하는...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network6",
        "teaser": null
      },{
        "title": "응용 계층",
        "excerpt":"응용 계층의 역할 서비스를 요청하는 측을 클라이언트, 서비스를 제공하는 측을 서버라고 한다. 응용 계층에서는 사용자 측(클라이언트)의 요청을 전달하기 위해 통신 대상(서버 등)이 이해할 수 있는 메시지(데이터)로 변환하고 전송 계층으로 전달하는 역할&lt;/br&gt; 클라이언트 측 애플리케이션이 서버 측 애플리케이션과 통신하려면 응용 계층의 프로토콜을 사용해야 한다. 주요 계층 프로토콜 웹 사이트 : HTTP...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network7",
        "teaser": null
      },{
        "title": "네트워크의 전체 흐름",
        "excerpt":"랜 카드에서의 데이터 전달과 처리 웹 사이트에 방문했을 때 이루어지는 전체적인 데이터 처리 과정에 대해서 알아보자… 네트워크의 구성 OSI모델의 각 계층 간에 데이터가 전달되고 처리되는 전체 과정 응용 계층 : 애플리케이션 등에서 사용하는 데이터를 송수신하는 데 필요 전송 계층 : 목적지에 데이터를 정확하게 전달하는데 필요 네트워크 계층 : 다른 네트워크에...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network8",
        "teaser": null
      },{
        "title": "무선 랜 이해하기",
        "excerpt":"랜 카드에서의 데이터 전달과 처리 웹 사이트에 방문했을 때 이루어지는 전체적인 데이터 처리 과정에 대해서 알아보자… 네트워크의 구성 OSI모델의 각 계층 간에 데이터가 전달되고 처리되는 전체 과정 응용 계층 : 애플리케이션 등에서 사용하는 데이터를 송수신하는 데 필요 전송 계층 : 목적지에 데이터를 정확하게 전달하는데 필요 네트워크 계층 : 다른 네트워크에...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network8",
        "teaser": null
      },{
        "title": "리액트 설치와 프로젝트 생성",
        "excerpt":"프로젝트를 기획하는 중 의도치 않게 프론트 작업이 많아져 리액트를 사용하기로 했다. (컴포넌트 재사용성과 상태관리를 고려하여 내린 결정) 걱정되는 점은 리액트 경험자가 나뿐이라는 점… 그리고 나도 찍먹 수준이라는 점… 우리팀 화이팅 ^__^ 기억을 더듬다 보니 역시 기록이 중요한 것 같아 하나씩 남겨보려한다 개발환경 리액트 프로젝트를 생성하기 위해서는 node.js 설치가 필요하다. 에디터는...","categories": ["React"],
        "tags": ["React"],
        "url": "/react/1",
        "teaser": null
      },{
        "title": "무선 랜의 구조 이해",
        "excerpt":"무선 랜의 구조 무선 랜이란? 랜 케이블을 사용하지 않고 전파를 이용하여 무선으로 컴퓨터를 서로 연결한다. 장점 랜 케이블을 사용하지 않으므로 편하다 거리가 떨어져 있어도 통신할 수 있다 단점 유선보다 속도가 불안정하다 통신 내용이 해킹될 위험이 높다 무선랜은 반드시 암호화나 인증 설정을 해야한다. 무선 액세스 포인트(Wireless Access Point, WAP)와 무선 클라이언트(컴퓨터나...","categories": ["Network"],
        "tags": ["tag1","tag2"],
        "url": "/Network/network10",
        "teaser": null
      },{
        "title": "기본적인 JSX문법과 useState",
        "excerpt":"프로젝트 구조 리액트 프로젝트 생성시, node_modules, public, src 폴더가 생긴다. node_modules : 라이브러리 코드 보관함 public : static 파일 보관함 src : 소스 코드 보관함 className JSX문법에서는 class 대신 className을 사용하여 속성을 주어야한다. function App() { return ( &lt;div className=\"App\"&gt; &lt;div className=\"balck-nav\"&gt; &lt;h4&gt;class 넣을 땐 className&lt;/h4&gt; &lt;/div&gt; &lt;/div&gt; ); }...","categories": ["React"],
        "tags": ["React","JSX"],
        "url": "/react/2",
        "teaser": null
      },{
        "title": "useState와 Component",
        "excerpt":"state 변경 function App() { let post = '변수는 중괄호를 사용하여 집어넣을 수 있다.'; let [글제목, b] = useState(['남자코트 추천', '강남우동 맛집', '파이썬독학']); let [따봉, 따봉변경] = useState(0); return ( &lt;div className=\"App\"&gt; &lt;div className=\"balck-nav\"&gt; &lt;h4&gt;블로그임&lt;/h4&gt; &lt;/div&gt; &lt;h4&gt;{post}&lt;/h4&gt; &lt;div className='list'&gt; &lt;h4&gt;{글제목[0]}&lt;span onClick={()=&gt;{따봉변경(따봉+1)}}&gt;👍&lt;/span&gt;{따봉}&lt;/h4&gt; &lt;p&gt;2월 17일 발행&lt;/p&gt; &lt;/div&gt; &lt;div className='list'&gt; &lt;h4&gt;{글제목[1]}&lt;/h4&gt; &lt;p&gt;2월 17일...","categories": ["React"],
        "tags": ["React","useState"],
        "url": "/react/3",
        "teaser": null
      },{
        "title": "디렉토리 계층 구조",
        "excerpt":"리눅스의 디렉토리 계층 구조는 FHS(Filesystem Hierarchy Standard)에 따라 설계되었습니다. 이 표준은 리눅스 및 유닉스 계열 시스템에서 파일과 디렉토리가 어떻게 구성되고 배치되어야 하는지를 정의합니다. 이를 통해 사용자는 디렉토리의 역할과 파일의 위치를 쉽게 이해할 수 있습니다. 리눅스 디렉토리 계층 구조의 핵심 리눅스 파일 시스템은 루트 디렉토리(/)에서 시작하며, 모든 디렉토리와 파일은 이곳에서 파생됩니다....","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/1",
        "teaser": null
      },{
        "title": "vi 텍스트 에디터 사용법",
        "excerpt":"리눅스 vi 텍스트 에디터 사용법 vi는 리눅스와 유닉스 시스템에서 기본 제공되는 강력한 텍스트 에디터입니다. 다소 직관적이지 않지만, 기본적인 사용법만 익히면 효율적인 파일 편집이 가능합니다. vi의 3가지 모드 vi는 3가지 주요 모드로 동작합니다. 모드 설명 명령 모드 (Command mode) 기본 모드로, 커서 이동, 명령 실행(저장, 종료 등)을 수행합니다. 입력 모드 (Insert...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/2",
        "teaser": null
      },{
        "title": "사용자 계정",
        "excerpt":"리눅스 사용자 계정의 구조 사용자 정보 파일 /etc/passwd 모든 사용자 계정 정보를 저장. 형식: username:x:UID:GID:comment:home_directory:shell username: 사용자 이름. x: 비밀번호 필드(보안상 /etc/shadow에 저장). UID: 사용자 ID. GID: 그룹 ID. comment: 사용자 설명(예: 이름). home_directory: 홈 디렉토리 위치. shell: 로그인 셸(기본값: /bin/bash). /etc/shadow 암호화된 비밀번호 저장. 파일 형식: username:encrypted_password:last_change:min:max:warn:inactive:expire /etc/group 그룹...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/3",
        "teaser": null
      },{
        "title": "sudo와 su명령어",
        "excerpt":"리눅스 sudo 명령어 sudo는 “superuser do”의 약자로, 일반 사용자가 관리자 권한(루트 권한)으로 특정 명령을 실행할 수 있도록 허용하는 리눅스 명령어입니다. sudo는 보안과 효율성을 높이기 위해 설계되었으며, 관리자 비밀번호 대신 현재 사용자 비밀번호를 입력하여 실행합니다. sudo의 주요 특징 권한 제한: 특정 명령만 관리자 권한으로 실행 가능. 안전성: 관리자 비밀번호를 노출하지 않고,...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/4",
        "teaser": null
      },{
        "title": "사용자 권한 (chmod, chown, chgrp)",
        "excerpt":"리눅스 파일 권한 구조 1. 기본 권한의 구성 리눅스의 파일 권한은 ls -l 명령으로 확인할 수 있습니다. 예를 들어: -rw-r--r-- 1 hong devteam 1024 Jan 9 10:00 example.txt 항목 설명 -rw-r--r-- 권한: 소유자(owner), 그룹(group), 기타 사용자(others) 권한. 1 하드 링크의 개수. hong 소유자(owner): 파일의 주인 사용자. devteam 그룹(group): 소유자가 속한...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/5",
        "teaser": null
      },{
        "title": "리눅스 프로세스 관리 (ps, top, kill..)",
        "excerpt":"리눅스 sudo 명령어 sudo는 “superuser do”의 약자로, 일반 사용자가 관리자 권한(루트 권한)으로 특정 명령을 실행할 수 있도록 허용하는 리눅스 명령어입니다. sudo는 보안과 효율성을 높이기 위해 설계되었으며, 관리자 비밀번호 대신 현재 사용자 비밀번호를 입력하여 실행합니다. sudo의 주요 특징 권한 제한: 특정 명령만 관리자 권한으로 실행 가능. 안전성: 관리자 비밀번호를 노출하지 않고,...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/6",
        "teaser": null
      },{
        "title": "리눅스 패키지(apt)과 압축(tar, gz)",
        "excerpt":"리눅스 패키징(Packaging) 패키징은 소프트웨어를 설치, 업데이트, 제거, 관리할 수 있도록 구성된 포맷과 관련 도구를 의미합니다. 리눅스 시스템은 다양한 배포판(Distro)을 가지며, 배포판에 따라 패키지 관리 시스템(Package Manager)이 다를 수 있습니다. 패키지의 구성 리눅스에서 패키지는 보통 다음을 포함합니다: 바이너리 파일: 실행 가능한 소프트웨어 파일. 설정 파일: /etc 디렉토리에 위치. 의존성 정보: 패키지가...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/7",
        "teaser": null
      },{
        "title": "우분투 리눅스에서 MariaDB 설치 및 초기 설정",
        "excerpt":"리눅스 패키징(Packaging) 패키징은 소프트웨어를 설치, 업데이트, 제거, 관리할 수 있도록 구성된 포맷과 관련 도구를 의미합니다. 리눅스 시스템은 다양한 배포판(Distro)을 가지며, 배포판에 따라 패키지 관리 시스템(Package Manager)이 다를 수 있습니다. 1. MariaDB 설치 1.1. MariaDB 패키지 업데이트 MariaDB가 Ubuntu 기본 리포지토리에 포함되어 있으므로 먼저 시스템 패키지를 업데이트합니다. sudo apt update sudo...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/8",
        "teaser": null
      },{
        "title": "모놀리식 아키텍처와 MSA(MicroServices Architecture)",
        "excerpt":"1. 모놀리식 아키텍처 (Monolithic Architecture) 정의와 동작 방식 모놀리식 아키텍처는 애플리케이션의 모든 기능(사용자 인터페이스, 비즈니스 로직, 데이터 처리 등)이 하나의 코드베이스에 포함되어 동작하는 구조입니다. 동작 예시: 사용자가 상품을 검색. 서버가 요청을 받아 비즈니스 로직에서 처리. 데이터베이스에서 데이터를 조회. 결과를 사용자에게 반환. 구조 graph TD UI[사용자 인터페이스] BL[비즈니스 로직] DB[데이터베이스] UI...","categories": ["Linux"],
        "tags": ["tag1","tag2"],
        "url": "/linux/9",
        "teaser": null
      },{
        "title": "Kotlin - 자바 함수와 코틀린 함수의 차이, 그리고 람다식",
        "excerpt":"기본적으로 코틀린의 함수는 장환한 코드를 써야하는 자바 함수의 단점을 개선하기 위해서 간결한 코드를 제공 1. 함수 선언 클래스 내부에서 메서드로만 선언이 가능한 자바와 달리 코틀린은 최상위 레벨에서 바로 함수 선언이 가능 // Java public class Example { // 클래스 내부에서만 함수 선언 가능 public int add(int a, int b) {...","categories": ["Kotlin"],
        "tags": ["tag1","tag2"],
        "url": "/kotlin/2",
        "teaser": null
      },{
        "title": "다형성",
        "excerpt":"다형성(Polymorphism)은 객체 지향 프로그래밍의 중요한 특징 중 하나로, 하나의 객체가 여러 가지 타입을 가질 수 있는 것을 의미합니다. 인터페이스와 상속을 통해서 구현이 가능하며, 역할과 구현을 분리하여 코드의 단순함과 유연성을 확보합니다. 0. 다형성을 쉽게 이해하기 자동차라는 역할과 구현(K3, 아반떼, 테슬라)를 나눠서 구현하게 된다면? 운전자는 운전만 할 수 있으면 자동차라는 역할에 K3...","categories": ["Java"],
        "tags": ["tag1","tag2"],
        "url": "/java/4",
        "teaser": null
      },{
        "title": "Kotlin - 클래스와 상속의 기본 개념",
        "excerpt":"코틀린 클래스의 기본 특징 코틀린의 클래스는 자바와 유사하지만, 더 간결하고 현대적인 문법을 제공합니다. 1. 기본 클래스 선언 class Person { var name: String = \"\" var age: Int = 0 } 코틀린에서는 new 키워드 없이 객체를 생성할 수 있습니다: val person = Person() 2. 생성자 코틀린은 주 생성자와 부 생성자를...","categories": ["Kotlin"],
        "tags": ["tag1","tag2"],
        "url": "/kotlin/3",
        "teaser": null
      },{
        "title": "Kotlin - 마이그레이션",
        "excerpt":"Java Spring에서 Kotlin Spring으로의 전환 핵심 요약 1. Null 안전성 처리 코틀린의 널 안전성 연산자를 활용한 안전한 null 처리로 NPE 예방 // Kotlin의 널 안전성 연산자(?., ?:, let)을 활용한 명확한 널 처리 fun processUser(user: User?) { user?.let { u -&gt; println(u.name) } ?: throw UserNotFoundException() } 2. 클래스 및 데이터...","categories": ["Kotlin"],
        "tags": ["tag1","tag2"],
        "url": "/kotlin/5",
        "teaser": null
      },{
        "title": "포트 포워딩의 개념과 도커에서의 포트 포워딩 방법",
        "excerpt":"📌 포트포워딩(Port Forwarding)의 기본 개념 포트포워딩은 네트워크에서 특정 포트로 들어오는 데이터 패킷을 다른 포트로 전달해주는 기술입니다. 작동 방식 외부 포트 → 내부 포트로 트래픽 전달 네트워크 주소 변환(NAT)의 한 종류 내부 네트워크의 서비스를 외부에서 안전하게 접근 가능하게 함 실생활 비유 마치 건물의 안내 데스크와 같습니다: 방문자(외부 요청)가 안내 데스크(외부 포트)에...","categories": ["Devops"],
        "tags": ["tag1","tag2"],
        "url": "/docker/1",
        "teaser": null
      },{
        "title": "Docker 기본 명령어",
        "excerpt":"Docker 기본 명령어 정리 이미지 관련 명령어 이미지 검색 docker search 이미지명 이미지 다운로드 docker pull 이미지명:[태그] 이미지 목록 확인 docker images 이미지 삭제 docker rmi 이미지명:[태그] #특정 이미지 삭제 docker rmi -f 이미지명:[태그] #강제 삭제 docker image prune #사용하지 않는 이미지 모두 삭제 컨테이너 관련 명령어 컨테이너 실행 docker...","categories": ["Devops"],
        "tags": ["tag1","tag2"],
        "url": "/docker/2",
        "teaser": null
      },{
        "title": "Spring 프레임워크 들어가기",
        "excerpt":"Spring Framework는 Java 플랫폼을 위한 오픈 소스 애플리케이션 프레임워크로, 개발자가 대규모 엔터프라이즈 애플리케이션을 효율적으로 개발할 수 있도록 다양한 기능을 제공합니다. IoC(Inversion of Control)와 DI(Dependency Injection) 같은 핵심 개념을 기반으로 하여, 복잡한 Java 애플리케이션의 설계와 구성을 간결하게 만들고, 유지보수성을 높이는 데 도움을 줍니다. Spring은 웹 애플리케이션, 데이터베이스 연동, 보안, 배치 작업,...","categories": ["Spring"],
        "tags": ["tag1","tag2"],
        "url": "/spring/1",
        "teaser": null
      }]
