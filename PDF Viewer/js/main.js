const url = "../Docs/sample.pdf";

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.getElementById("pdf-render"),
  ctx = canvas.getContext("2d");

//Render the page
const renderPage = (num) => {
  pageIsRendering = true;
  pdfDoc.getPage(num).then((page) => {
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderCtx = {
      canvasContext: ctx,
      viewport,
    };
    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    //output current page

    document.querySelector("#page-num").textContent = num;
  });
};

//chek for pages rendering
const queueRenderPage = (num) => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

//show pre page
const showPrePage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};
//show Next page
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};

//Get the document

pdfjsLib
  .getDocument(url)
  .promise.then((pdfDoc_) => {
    pdfDoc = pdfDoc_;

    document.querySelector("#page-count").textContent = pdfDoc.numPages;
    renderPage(pageNum);
  })
  .catch((e) => {
    const div = document.createElement("div");
    div.className = "error";
    div.appendChild(document.createTextNode(e.message));
    document.querySelector("body").insertBefore(div, canvas);
    document.querySelector(".top-bar").style.display = "none";
  });

//Button events

document.querySelector("#prev-page").addEventListener("click", showPrePage);
document.querySelector("#next-page").addEventListener("click", showNextPage);
