// 1. 투두리스트 디자인 만들기
// 2. Todo 객체 생성
// 기본 속성 : 내용, 체크여부, id값,
/* const todos = [todo, todo, todo];

const todo = {
  title: "",
  checked: false,
  id: "",
};*/

// Dummy Data(가짜데이터)
const todos = [
  { title: "자바스크립트 공부", checked: true, id: 1 },
  { title: "자바스크립트 공부", checked: false, id: 2 },
];

function addTodo() {
  const input = document.getElementById("todo_input");
  const title = input.value.trim();
  if (title === "") return alert("할 일을 입력하세요!");

  const newTodo = {
    title: title,
    checked: false,
    id: Date.now().toString(),
  };
}
todos.push(newTodo);
input.value = ""; //입력창 초기화
loadTodos(); // 목록 다시

//화면에 투두리스트 모두 보여주는 함수
function loadTodos() {
  const ul = document.getElementById("todo_list"); //ul 태그 가져오기
  ul.innerHTML = ""; //ul 안의 모든 태그 초기화
  todos.forEach((item, index) => {
    const li = document.createElement("li"); //html 태그 생성
    li.innerHTML = item.title;

    const p = document.createElement("p"); // 내용을 넣을 p 태그 생성
    p.innerHTML = item.content; // p태그 안에 내용 넣기
    p.style.color = "blue";
    li.appendChild(p); // p태그를 li태그 안에 넣기
    ul.appendChild(li); // 생성한 태그를 부모태그에 넣기
  });
  console.log(todos);
}

// 추가 버튼 이벤트 등록
document.getElementById("addBtn").addEventListener("click", () => {
  // todo 추가함수 실행
  addTodo();
  // 리스트 불러오는 함수 실행
  loadTodos();
});

// 투두리스트 추가 함수
function addTodo() {
  // 각각의 input태그에 title 대한 값 가져오기
  const title = document.getElementById("title").value;
  const newTodo = {
    // 새로운 todo 객체 생성
    title,
    checked,
    id: Math.random().toString(), // 랜덤난수로 중복되지 않은 id값 생성
  };
  todos.push(newTodo);
}
