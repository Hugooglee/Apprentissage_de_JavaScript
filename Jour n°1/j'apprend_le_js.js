const body = document.querySelector('body')
const theme = document.querySelectorAll('.btn')

  theme.forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log('yes');
    document.body.classList.remove('darkT', 'whiteT', 'redT')
    switch (e.target.id) {
      case "btn_darkmode":
        document.body.classList.add("darkT");
        break;
      case "btn_whitemode":
        document.body.classList.add("whiteT");
        break;
      case "btn_redmode":
        document.body.classList.add("redT");
        break;
      default:
        null;
    }
  })
);