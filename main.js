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

// DOM 요소 가져오기
const input = document.getElementById("input");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("list");
const todo_all = document.getElementById("show_all");

// 할일 추가
function addTodo() {
  const title = input.value.trim(); // 입력값 가져오기
  if (title === "") return alert("할 일을 입력하세요!");

  // 새로운 할 일 객체 생성
  const newTodo = {
    title: title,
    checked: false,
    id: Date.now().toString(), // 고유 ID 생성
  };

  todos.push(newTodo); // 배열에 추가
  input.value = ""; // 입력창 초기화
  loadTodos(); // 목록 업데이트
}

//화면에 투두리스트 모두 보여주는 함수
function loadTodos() {
  list.innerHTML = ""; // 목록 초기화
  // const ul = document.getElementById("todo_list"); //ul 태그 가져오기
  // ul.innerHTML = ""; //ul 안의 모든 태그 초기화

  todos.forEach((todo) => {
    const li = document.createElement("li"); // li 요소 생성
    li.className = todo.checked ? "completed" : "";

    // li.innerHTML = item.title;

    // 체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.checked;

    // 체크박스 변경 이벤트
    checkbox.addEventListener("change", () => {
      todo.checked = checkbox.checked;
      li.classList.toggle("completed");
    });

    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-btn";

    // 삭제 버튼 클릭 이벤트
    deleteButton.addEventListener("click", () => {
      const index = todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        todos.splice(index, 1); // 배열에서 삭제
        loadTodos(); // 화면 업데이트
      }
    });

    li.appendChild(checkbox); // 체크박스 추가
    li.appendChild(document.createTextNode(todo.title)); // 할 일 제목 추가
    li.appendChild(deleteButton); // 삭제 버튼 추가
    list.appendChild(li); // 리스트에 추가
  });
}

// addButton.addEventListener("click", addTodo);
// 추가 버튼 이벤트 등록-> 두개의 함수를 실행
document.getElementById("addBtn").addEventListener("click", () => {
  // todo 추가함수 실행
  addTodo();
  // 리스트 불러오는 함수 실행 - 목록 없데이트
  loadTodos();
});

// 할일 목록 모두 보기 버튼
todo_all.addEventListener("click", () => {
  loadTodos();
});

loadTodos();
