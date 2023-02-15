window.addEventListener("load", (event) => {
  let swiperWrapper1 = document.querySelector("#swiper-wrapper-1");
  let swiperWrapper2 = document.querySelector("#swiper-wrapper-2");
  /* The Team */
  let team = [
    {
      imeKursa: "Gluma za početnike",
      opis: "Kurs osnova glume, uključujući tehnike disanja, pokreta, izražavanja i improvizacije, sa praktičnim vežbama na sceni i monolozima.",
      slika: "assets/img/glumazapocetnike.jpeg",
      linkKursa: "#",
      predavac: "Tadija Miletić",
      datum: "14. Feb",
      vreme: "18:00H",
    },
    {
      imeKursa: "Tehnike i materijali",
      opis: "Ovaj kurs će vam dati temeljne informacije i praktična iskustva u korišćenju materijala i tehnika kao što su akvarel, ulje, pastel, crtež i slikanje",
      slika: "assets/img/tehnikeimaterijali.jpg",
      linkKursa: "#",
      predavac: "Tadija Miletić",
      datum: "14. Feb",
      vreme: "18:00H",
    },
    {
      imeKursa: "Putovanje kroz tradicionalne umetnosti",
      opis: "Ovaj kurs će vas upoznati sa svetom tradicionalnih umetnosti kroz istraživanje različitih tehnika i stilova, uključujući tkanje, izradu keramike, izradu nakita i drveća",
      slika: "assets/img/putovanje.jpg",
      linkKursa: "#",
      predavac: "Tadija Miletić",
      datum: "14. Feb",
      vreme: "18:00H",
    },
    {
      imeKursa: "Pozitivna Promena",
      opis: "Kroz radionice i individualne konsultacije sa stručnim trenerima, stekaćete nova saznanja o sebi i načinima da poboljšate svoju svakodnevnicu.",
      slika: "assets/img/pozitivnapromena.jpg",
      linkKursa: "#",
      predavac: "Tadija Miletić",
      datum: "14. Feb",
      vreme: "18:00H",
    },
    {
      imeKursa: "Zvuci Inspiracije",
      opis: "Putem radionica sa stručnim muzičkim učiteljima i individualnih sesija, naučićete kako da sviraćete instrument ili pevate, kao i kako da komponujete i izvodite svoje pesme.",
      slika: "assets/img/zvuciinspiracije.jpg",
      linkKursa: "#",
      predavac: "Tadija Miletić",
      datum: "14. Feb",
      vreme: "18:00H",
    },
    {
      imeKursa: "Zelena Perspektiva",
      opis: "Putem radionica i praktičnih vežbi, naučićete kako da štedite energiju, smanjujete otpad, koristite prirodne resurse i živite zdraviji život. ",
      slika: "assets/img/ecology.jpg",
      linkKursa: "#",
      predavac: "Tadija Miletić",
      datum: "14. Feb",
      vreme: "18:00H",
    },
  ];
  function addTeam() {
    for (let i = 0; i < team.length; i++) {
      /* Variables for the team */
      console.log("slide", i, "loaded");
      let imeKursa = team[i].imeKursa,
        opis = team[i].opis,
        slika = team[i].slika,
        linkKursa = team[i].linkKursa,
        predavac = team[i].predavac,
        datum = team[i].datum,
        vreme = team[i].vreme;
      /* Template for the Team Cards */
      let templateTeam = `
                <div class="swiper-slide">
                  <div class="rounded-lg colorful-border before:rounded-lg">
                    <div class="flex flex-col aspect-[1/1.2] bg-white rounded-lg relative slide-shadow before:rounded-lg">
                      <div class="rounded-lg h-1/2">
                        <img class="object-cover w-full h-full rounded-t-lg" src="${slika}" alt="" />
                      </div>
                      <div class="flex flex-col items-start justify-between p-4 h-1/2">
                        <div class="flex flex-col items-start justify-start">
                          <h3 class="font-sans text-2xl font-bold">${imeKursa}</h3>
                          <p class="font-sans font-medium text-md">${opis}</p>
                        </div>
                        <div class="flex w-full">
                          <div class="flex flex-col items-start justify-end w-1/2 text-sm">
                            <p><i class="mx-1 fa-solid fa-user-tie fa-xs"></i>${predavac}</p>
                            <p><i class="mx-1 fa-solid fa-clock fa-xs"></i>${vreme}<i class="mx-1 fa-solid fa-calendar fa-xs"></i>${datum}</p>
                          </div>
                          <div class="flex items-end justify-end w-1/2">
                            <a href="${linkKursa}" class="p-4 text-xs font-bold text-white rounded-lg button">DETALJNIJE</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
      swiperWrapper1.insertAdjacentHTML("beforeend", templateTeam);
    }
  }
  addTeam();
  var swiper = new Swiper("#swiper1", {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    touchRatio: 0.3,
    longSwipes: true,
    preventInteractionOnTransition: true,
    longSwipesRatio: 0.1,
    autoplay: false,
    speed: 750,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-110%", 0, -500],
        rotate: [0, -25, 0],
        scale: 1.2,
      },
      next: {
        translate: ["110%", 0, -500],
        rotate: [0, 25, 0],
        scale: 1.2,
      },
    },
    pagination: {
      el: "#swiper-pagination-1",
      clickable: true,
    },
    navigation: {
      nextEl: "#next-1",
      prevEl: "#prev-1",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1.7,
      },
      1024: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3,
      },
      1536: {
        slidesPerView: 3.3,
      },
    },
  });

  let professors = [
    {
      imeProfesora: "Tadija Miletić",
      bold: "Najpametniji čovek Srbije",
      opis: "Osnivač Kulturnog elementa, profesor na Fakultetu Dramskih Umetnosti i jedna legenda",
      slika: "assets/img/profesor.jpeg",
      linkFacebook: "#",
      linkInstagram: "#",
      linkTweeter: "#",
      linkExpand: "#",
    },
    {
      imeProfesora: "Branko Žujković",
      bold: "Profesionalni pianista",
      opis: "Stručni saradnik Kulturnog elementa i vividni sanjar",
      slika: "assets/img/profesor2.jpg",
      linkFacebook: "#",
      linkInstagram: "#",
      linkTweeter: "#",
      linkExpand: "#",
    },
    {
      imeProfesora: "Dina Miletić",
      bold: "Profesionalni pianista",
      opis: "Žena najpametnijeg čoveka Srbije i ništa manje legenda",
      slika: "assets/img/profesor3.jpg",
      linkFacebook: "#",
      linkInstagram: "#",
      linkTweeter: "#",
      linkExpand: "#",
    },
  ];
  function addProfessors() {
    for (let i = 0; i < professors.length; i++) {
      /* Variables for the team */
      console.log("slide", i, "loaded");
      let imeProfesora = professors[i].imeProfesora,
        opis = professors[i].opis,
        slika = professors[i].slika,
        bold = professors[i].bold,
        linkFacebook = professors[i].linkFacebook,
        linkInstagram = professors[i].linkInstagram,
        linkTweeter = professors[i].linkTweeter,
        linkExpand = professors[i].linkExpand;
      let template = `
                <div class="swiper-slide">
                  <div class="flex flex-col items-center aspect-[1/1.3] w-full">
                    <div class="w-2/3 rounded-[50%] mb-[-35%] colorful-border before:rounded-[50%]">
                      <div class="relative slide-shadow before:rounded-[50%] before:z-30">
                        <img class="rounded-[50%] w-full aspect-square object-cover object-top" src="${slika}" alt="" />
                      </div>
                    </div>
                    <div class="w-full h-full bg-white rounded-lg colorful-border">
                      <div class="flex flex-col items-center justify-between pt-[35%] w-full h-full bg-white rounded-lg p-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                        <div class="flex flex-col items-center justify-center">
                          <p class="pb-3 font-serif text-2xl font-medium text-center">${imeProfesora}</p>
                          <p class="font-sans font-normal text-center text-md">
                            <span class="text-lg font-semibold leading-10">${bold}</span><br />
                            ${opis}
                          </p>
                        </div>
                        <div class="z-50 flex items-center justify-center w-full cursor-pointer pointer-events-auto title">
                          <a href="${linkInstagram}" class="flex items-center justify-center w-full aspect-square">
                            <i class="fa-xl fa-brands fa-instagram"></i>
                          </a>
                          <a href="${linkFacebook}" class="flex items-center justify-center w-full aspect-square">
                            <i class="fa-xl fa-brands fa-facebook"></i>
                          </a>
                          <a href="${linkTweeter}" class="flex items-center justify-center w-full aspect-square">
                            <i class="fa-xl fa-brands fa-twitter"></i>
                          </a>
                          <a href="${linkExpand}" class="flex items-center justify-center w-full aspect-square">
                            <i class="fa-xl fa-solid fa-expand"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
      swiperWrapper2.insertAdjacentHTML("beforeend", template);
    }
  }
  addProfessors();
  let swiper2 = new Swiper("#swiper2", {
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    touchRatio: 0.3,
    longSwipes: true,
    preventInteractionOnTransition: true,
    longSwipesRatio: 0.1,
    speed: 750,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      limitProgress: 2,
      progressMultiplier: 1,
      prev: {
        translate: ["-120%", -40, -500],
        rotate: [0, 0, 0],
        scale: 1.2,
      },
      next: {
        translate: ["120%", -40, -500],
        rotate: [0, 0, 0],
        scale: 1.2,
      },
    },
    pagination: {
      el: "#swiper-pagination-2",
      clickable: true,
    },
    navigation: {
      nextEl: "#next-2",
      prevEl: "#prev-2",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.9,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3.5,
      },
      1536: {
        slidesPerView: 5,
      },
    },
  });
});
