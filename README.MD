# 손동작을 이용한 키오스크
손동작을 이용해 조작하는 키오스크

## require
- python 3.7.9(3.8이상에서는 동작불가)
- node js

## 사용법

### 준비
- 해당 폴더에서 Npm install
- 파이썬 3.7.9 가상환경 세팅(가능하다면 source venv/bin/activate 명령어로 venv 폴더에 있는 가상환경 사용)
<br/><b>가상환경 생성및 진입 Mac</b>
- python3.7 -m venv venv2 로 python3.7기반 가상환경 생성
- source venv2/bin/activate 명령어로 가상환경 진입
<br/><b>가상환경 생성및 진입 Windows</b>
- anaconda를 이용하여 python3.7가상환경 생성 후 진입
<br/><b>파이썬 패키지 일괄설치</b>
- pip install -r requirements.txt 명령어로 패키지 한번에 설치가능
- 만일 파이썬 수동설치시 호환성 문제로 인해 mediapipe 라이브러리는 0.8.8로 설치해야한다

### 실행
- mydual.py를 실행시켜 백엔드(서버) 실행
- npm start를 통해 React앱 실행
- 둘의 통신이 성공적으로 완료되었다면 파이썬에서 카메라를 통해 영상신호를 받기 시작하고 정상동작한다.

## 현재까지 진행결과
#### Python
- 인식가능한 손 모양: 1, 2, 3, 4, 5, 엄지척, 상하좌우 스크롤
- React앱으로 JSON파일 형식으로 socket통신
#### React
- 가장 복잡한 페이지의 layout제작완료

### 앞으로 진행할 내용
- 파이썬 손동작 인식시 중간중간 socket으로 보내는 값들이 중구난방으로 인식되서 보내지는 경향이 있어 수정필요
- React앱에서 페이지들 제작및 동작 추가

## Updates
- 10.26(화) README 파일 첫 작성