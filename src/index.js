import "./styles.css";

const onClickedAdd = () => {
  // テキストボックスの値を取得、初期化する
  const inputText = document.getElementById("add-text")
    .value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(戻す)タグ生成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    // 処理を書く！！
  });

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = completeButton.parentNode;
    deleteFromIncmpleteList(deleteTarget);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document
      .getElementById("complete-list")
      .appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncmpleteList(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document
    .getElementById("incomplete-list")
    .appendChild(div);
  console.log("テスト");
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncmpleteList = (target) => {
  document
    .getElementById("incomplete-list")
    .removeChild(target);
};

// 追加ボタンをクリックしたときの関数呼び出し
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickedAdd());

// 完了ボタンをクリックしたときの関数呼び出し
