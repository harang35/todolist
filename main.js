// 1. 투두리스트 디자인 만들기
// 2. Todo 객체 생성
// 기본 속성 : 내용, 체크여부, id값,
const todos = [todo, todo, todo];

const todo = {};
const doto = {
  title: "",
  checked: false,
  id: "",
};

// 입력창과 버튼, 리스트를 가져오기
const input = document.getElementById("input");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("list");

// 입력 클릭 이벤트
addButton.addEventListener("click", () => {
  const todoText = input.value.trim(); // 입력값 가져오기 및 공백 제거

  // 입력창에 내용 없으면 경고
  if (!todoText) {
    alert("내용을 입력해 주세요!");
    return;
  }

  const li = document.createElement("li"); // 새로운 할 일 만들기
  const checkbox = document.createElement("input"); // 체크박스 생성
  checkbox.type = "checkbox"; // 체크박스 타입 지정

  checkbox.addEventListener("change", () => {
    // 체크박스 변경 이벤트
    li.classList.toggle("completed"); // 체크되면 완료 표시
  });

  const deleteButton = document.createElement("button"); // 삭제 버튼 생성
  deleteButton.textContent = "X";
  deleteButton.className = "delete-btn";

  // 할일 삭제 클릭 이벤트
  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(checkbox); // 체크박스 추가
  li.appendChild(document.createTextNode(todoText)); // 할 일 추가
  li.appendChild(deleteButton);

  list.appendChild(li); // 리스트에 추가
  input.value = ""; // 입력창 초기화
});
