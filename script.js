const container = document.querySelector(".u-container");

console.log(container);
var n = 10;

var i,
  c = 0;

setUpNonDraggable = (draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
};

setUpDraggable = (draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    draggable.parentElement.classList.add("drag-parent");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
};

setUpDraggableContainer = (container) => {
  container.addEventListener("dragover", (e) => {
    if (document.querySelector(".dragging").getAttribute("draggable")) {
      e.preventDefault();
    }
    container.classList.add("draggable-target");
  });
  container.addEventListener("dragleave", (e) => {
    // e.preventDefault();
    container.classList.remove("draggable-target");
  });
  container.addEventListener("drop", (e) => {
    // e.preventDefault();
    const droptarget = container;
    container.classList.remove("draggable-target");
    console.log(droptarget);
    const source = document.querySelector(".drag-parent");
    const dropchildren = [...droptarget.children];
    const sourcechildren = [...source.children];
    droptarget.innerHTML = "";
    source.innerHTML = "";
    dropchildren.map((child) => source.appendChild(child));
    sourcechildren.map((child) => droptarget.appendChild(child));
    source.classList.remove("drag-parent");
  });
};

createImageCard = (imgUrl) => {
  const container = document.querySelector(".u-container");
  const newDraggableContainer = document.createElement("div");
  newDraggableContainer.classList.add("draggable-container");
  const newDiv = document.createElement("div");
  newDiv.classList.add("draggable", "card-image", "card");
  const newImg = document.createElement("img");
  newImg.src = imgUrl;
  newImg.classList.add("card-img-top", "my-auto");
  newDiv.appendChild(newImg);
  newDiv.setAttribute("draggable", true);
  newDraggableContainer.appendChild(newDiv);

  setUpDraggable(newDiv);
  setUpDraggableContainer(newDraggableContainer);

  container.prepend(newDraggableContainer);
};

createInstaCard = (imgUrl) => {
  const container = document.querySelector(".u-container");
  const newDraggableContainer = document.createElement("div");
  newDraggableContainer.classList.add("draggable-container");
  const newDiv = document.createElement("div");
  newDiv.classList.add("non-draggable", "card-image", "card");
  const newImg = document.createElement("img");
  newImg.src = imgUrl;
  newImg.classList.add("card-img-top", "my-auto");
  newDiv.appendChild(newImg);
  newDraggableContainer.appendChild(newDiv);

  setUpNonDraggable(newDiv);
  container.prepend(newDraggableContainer);
};

const instaUrls = [
  "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/155089166_422045735746732_1603755397030723516_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9TpF1j7JJ8YAX_-_b0e&_nc_ht=scontent-bom1-1.xx&oh=692a9f5399a100fab7574876a2be5943&oe=60A91C90",
  "https://scontent-bom1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/177340045_467004111391438_8672106512528028838_n.jpg?tp=1&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=2OO-XeXb1k8AX_fZF-M&edm=AIQHJ4wBAAAA&ccb=7-4&oh=7b9e96a2e5f586afbee8ebf8cd00b2de&oe=60A9A114&_nc_sid=7b02f1",
  "https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/177301640_510634910306048_2257677529063539474_n.jpg?tp=1&_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=PT_v6JDxu5wAX8BNoI4&edm=AIQHJ4wBAAAA&ccb=7-4&oh=feded3e0ec2d2049a642d2556462db98&oe=60A97610&_nc_sid=7b02f1",
];

let imageUrls = [
  "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/155089166_422045735746732_1603755397030723516_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9TpF1j7JJ8YAX_-_b0e&_nc_ht=scontent-bom1-1.xx&oh=692a9f5399a100fab7574876a2be5943&oe=60A91C90",
  "https://scontent-bom1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/177340045_467004111391438_8672106512528028838_n.jpg?tp=1&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=2OO-XeXb1k8AX_fZF-M&edm=AIQHJ4wBAAAA&ccb=7-4&oh=7b9e96a2e5f586afbee8ebf8cd00b2de&oe=60A9A114&_nc_sid=7b02f1",
  "https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/177301640_510634910306048_2257677529063539474_n.jpg?tp=1&_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=PT_v6JDxu5wAX8BNoI4&edm=AIQHJ4wBAAAA&ccb=7-4&oh=feded3e0ec2d2049a642d2556462db98&oe=60A97610&_nc_sid=7b02f1",
];

instaUrls.map((url) => createInstaCard(url));

imageUrls.map((url) => createImageCard(url));

// ============ FILE UPLOAD ============

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}

function saveUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
  const uploadUrl = document
    .querySelector(".file-upload-image")
    .getAttribute("src");
  createImageCard(uploadUrl);
  $("#exampleModal").modal("hide");
}

$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});

// =============== CtxMenu =================
const data = [
  {
    name: "Delete",
    cmd: "delete",
    tips: "",
    separate: true,
    disabled: false,
    selectedTag: false,
    extend: [],
  },
];

let ctxmRes = {};

/* 为 document 绑定右键事件 */
document.querySelector(".u-container").addEventListener(
  "contextmenu",
  function (evte) {
    evte.preventDefault();

    let imgToDelete;
    if (evte.target.parentElement.getAttribute("draggable")) {
      imgToDelete = evte.target;
      console.log(imgToDelete);
    }

    console.time(`render - contextmenu`);
    /*
    渲染右键菜单
    此方法只会渲染节点 DOM 树, 但不会在页面显示
*/
    ctxmRes = Contextmenu.render(
      /* 一个设置了 position: fixed 的 DOM 节点 */
      document.getElementById("contextmenu-container"),
      data,
      {
        hyphen: ":",
        clickCallback(res) {
          console.log(evte);

          imageUrls = imageUrls.filter(
            (url) => url != imgToDelete.getAttribute("src")
          );
          imgToDelete.parentElement.parentElement.remove(
            imgToDelete.parentElement
          );

          Contextmenu.hidden(ctxmRes.$el);
        },
      }
    );
    console.timeEnd(`render - contextmenu`);

    /*
    在 render 之后需要手动调用 show 方法来显示右键菜单
 */
    if (!evte.target.parentElement.getAttribute("draggable")) {
      return;
    }
    Contextmenu.show(ctxmRes.$el, {
      left: evte.clientX,
      top: evte.clientY,
    });
  },
  false
);

/* 为 document 绑定点击事件 */
document.addEventListener(
  "click",
  function (evte) {
    console.log(imageUrls);
    Contextmenu.hidden(ctxmRes.$el);
  },
  false
);
