main();

function main() {
  apiGetProducts().then(function (result) {
    let persons = result.data;

    for (let i = 0; i < persons.length; i++) {
      let person = persons[i];
      persons[i] = new Person(
        person.id,
        person.taiKhoan,
        person.hoTen,
        person.matKhau,
        person.email,
        person.loaiND,
        person.ngonNgu,
        person.moTa,
        person.hinhAnh
      );
    }
    
    const personSearchValue = persons.filter((person) => {
      return person.loaiND === "GV"
    })
    display(personSearchValue);
  });
}

function display(persons) {
  let html = "";
  for (let i = 0; i < persons.length; i++) {
    let person = persons[i];
    html += `
        <div class="bt_bb-column col-xl-3">
                <div class="bt_bb_column_content ">
                  <div class="bt_bb_column_content_inner bt_bb_shape_soft-rounded bt_bb_padding_text_indent" style="background-color:rgba(255, 255, 255, 1)" >
                    <div class="bt_bb_image">
                      <span>
                        <img
                          src="./assets/img/${person.hinhAnh}"
                          data-image_src="./assets/img/${person.hinhAnh}"
                          title="teacher_1"
                          alt="http://tabula.bold-themes.com/wavy/wp-content/uploads/sites/3/2019/04/teacher_1.jpg"
                          class="btLazyLoadImage btLazyLoaded"
                        />
                      </span>
                    </div>
                    <header
                      class="bt_bb_headline bt_bb_color_scheme_5 bt_bb_dash_none bt_bb_superheadline bt_bb_size_small bt_bb_align_inherit"
                      data-bt-override-class="{}"
                    >
                      <h4 class="bt_bb_headline_tag">
                        <span class="bt_bb_headline_superheadline_person"
                          ><td>${person.ngonNgu}</span
                        ><span class="bt_bb_headline_content_person"
                          ><span>${person.hoTen}</span></span
                        >
                      </h4>
                    </header>
                    <div class="bt_bb_text bt_bb_align_center">
                      <p>
                          ${person.moTa}
                      </p>
                    </div>
                    <div class="list-brand">
                      <div class="bt_bb_icon">
                        <a
                          href="https://twitter.com/bold_themes"
                          target="_blank"
                          class="bt_bb_icon_holder"
                        >
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                      <div class="bt_bb_icon">
                        <a
                          href="https://twitter.com/bold_themes"
                          target="_blank"
                          class="bt_bb_icon_holder"
                        >
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                      <div class="bt_bb_icon">
                        <a
                          href="https://twitter.com/bold_themes"
                          target="_blank"
                          class="bt_bb_icon_holder"
                        >
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </div>
                      <div class="bt_bb_icon">
                        <a
                          href="https://twitter.com/bold_themes"
                          target="_blank"
                          class="bt_bb_icon_holder"
                        >
                          <i class="fa-brands fa-youtube"></i>
                        </a>
                      </div>
                    </div>            
                  </div>
                </div>
              </div>
            
      `;
  }
  document.getElementById("tblDanhSachSP").innerHTML = html;
}
