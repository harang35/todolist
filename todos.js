// 1. 투두리스트 디자인 만들기
// 2. Todo 객체 생성
// 기본 속성 : 내용, 체크여부, id값,
/* const todos = [todo, todo, todo];

const todo = {
  title: "",
  checked: false,
  id: "",
};*/

const todos = [];

const date1 = document.getElementById("date");
const input1 = document.getElementById("input_box");
const addBtn1 = document.getElementById("addBtn");
const todo_list1 = document.getElementById("todo_list");

// 현재 날짜
function date_up() {
  const today = new Date();
  const year = today.getFullYear(); //년
  const month = today.getMonth() + 1; //월
  const dates = today.getDate(); //일
  const day = today.getDay(); //요일
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  date1.innerHTML = `${year}년 ${month}월 ${dates}일 ${days[day]}`;
}
date_up();

// 현재 시간
const times = document.getElementById("time");

  setInterval(() => {
    const today = new Date(); //현재 날짜 가져요기
    const h = today.getHours(); //현재 시간 가져요기
    const m = today.getMinutes(); //현재 분 가져요기
    const s = today.getSeconds(); //현재 초 가져요기

    times.innerHTML = `${h} : ${m < 10 ? "0" + m : m} : ${
      s < 10 ? "0" + s : s
    }`;
   }, 1000); // 현재 시:분:초 화면에 보여주기

// 추가 버튼
function btn_event(){
  let input1=document.getElementById("input_box");
  let info=input1.value;
  
  const info1 = input1.value.trim(); // 입력값 가져오기
  if (info1 === "") return alert("할 일을 입력하세요!");

  // 할일 객체 생성
  const newTodo = {
    title: info,
    checked: false,
    id: Date.now(), // 고유 ID 생성
  };
  
  input1.value="";
  todos.push(newTodo); // 배열에 추가

  let newLi=document.createElement("li");
  let span=document.createElement("span");
  span.innerHTML=info;

  //ul에 li를 넣기
  let ul=document.querySelector("ul");

  // 체크박스
  let check=document.createElement("input");
  check.type="checkbox";
  check.setAttribute("class","check");

  // 체크박스 변경 이벤트
  check.addEventListener("change", () => {
    newLi.classList.toggle("completed"); // 체크시 스타일 변경
    newLi.check = check.checked;  // 배열 상태 변경
  });

  // del 버튼
  let del=document.createElement("button");
  del.setAttribute("class","del");
  del.innerHTML="X";

  // del 버튼 이벤트
  del.addEventListener("click", ()=>{
    document.querySelector("ul").removeChild(newLi);
  })

  // 체크박스 li 넣기
  newLi.appendChild(check);
  // 추가된 할일을 문자로 바꾸어 li 추가
  newLi.appendChild(span);
  // 삭제 후 li 추가
  newLi.appendChild(del);
  //li를 ul에 넣기
  ul.appendChild(newLi);
}

