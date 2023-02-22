window.addEventListener("load", (event) => {
  let swiperWrapper1 = document.querySelector("#swiper-wrapper-1");
  let swiperWrapper2 = document.querySelector("#swiper-wrapper-2");
  let swiperWrapper3 = document.querySelector("#swiper-wrapper-3");
  let courses = [
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
  function addCourses() {
    for (let i = 0; i < courses.length; i++) {
      console.log("slide", i, "loaded");
      let imeKursa = courses[i].imeKursa,
        opis = courses[i].opis,
        slika = courses[i].slika,
        linkKursa = courses[i].linkKursa,
        predavac = courses[i].predavac,
        datum = courses[i].datum,
        vreme = courses[i].vreme;
      let templateCourses = `
                <div class="swiper-slide">
                  <div class="relative flex items-center justify-center p-2 overflow-x-hidden bg-gray-400 ">
                    <div class="absolute w-[200%] left-0 h-[100%] animation-bg"></div>
                    <div class="flex flex-col aspect-[1/1.2] bg-white w-full  relative slide-shadow ">
                      <div class="h-1/2">
                        <img class="object-cover w-full h-full" src="${slika}" alt="" />
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
      swiperWrapper1.insertAdjacentHTML("beforeend", templateCourses);
    }
  }
  addCourses();
  let swiper = new Swiper("#swiper1", {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    touchRatio: 0.3,
    longSwipes: true,
    preventInteractionOnTransition: true,
    longSwipesRatio: 0.1,
    autoplay: true,
    speed: 750,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-110%", 0, -500],
        rotate: [0, 0, 0],
        scale: 1.2,
      },
      next: {
        translate: ["110%", 0, -500],
        rotate: [0, 0, 0],
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
      console.log("slide", i, "loaded");
      let imeProfesora = professors[i].imeProfesora,
        opis = professors[i].opis,
        slika = professors[i].slika,
        bold = professors[i].bold,
        linkFacebook = professors[i].linkFacebook,
        linkInstagram = professors[i].linkInstagram,
        linkTweeter = professors[i].linkTweeter,
        linkExpand = professors[i].linkExpand;
      let templateProfessors = `
                <div class="swiper-slide">
                  <div class="flex flex-col items-center aspect-[1/1.3] w-full">
                    <div class="w-2/3 rounded-[50%] mb-[-35%] before:rounded-[50%] relative overflow-hidden p-2">
                      <div class="absolute w-[300%] left-[-25%] top-[-1%] h-[244%] animation-bg"></div>
                      <div class="relative slide-shadow before:rounded-[50%] before:z-30 z-50">
                        <img class="rounded-[50%] w-full aspect-square object-cover object-top" src="${slika}" alt="" />
                      </div>
                    </div>
                    <div class="relative w-full h-full p-2 overflow-hidden bg-white ">
                      <div class="absolute w-[200%] left-0 bottom-0 h-[125%] animation-bg"></div>
                      <div class="flex flex-col items-center justify-between pt-[35%] relative w-full h-full bg-white  p-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
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
      swiperWrapper2.insertAdjacentHTML("beforeend", templateProfessors);
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
    autoplay: true,
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
  let blogPosts = [
    {
      blogPostName: "Saveti za stvaranje dinamičnog kompozicionog aranžmana",
      opis: "Kada se radi o vizuelnim umetnostima, kompozicija igra ključnu ulogu u kreiranju dojmljivog i upečatljivog dela. Svakom umetniku je cilj da privuče pažnju gledaoca i izazove emocije, a dinamičan kompozicioni aranžman je jedan od načina da se to postigne.",
      slika: "assets/img/vizuelne-blog.png",
      linkBlogPosta: "#",
      sadrzaj:
        "Prva stvar koju treba imati na umu prilikom stvaranja kompozicije jeste razumevanje elemenata dizajna: linije, oblika, boje, teksture i prostora. Svi ovi elementi moraju biti pažljivo uzeti u obzir pri odabiru i raspoređivanju elemenata na platnu.Jedan od načina za postizanje dinamičnosti je korišćenje kontrasta. Kontrast može biti u obliku različitih boja, oblika, tekstura ili veličina elemenata. Kombinovanjem kontrastnih elemenata u kompoziciji stvara se interesantna vizuelna dinamika.Još jedan način za stvaranje dinamičnog aranžmana je korišćenje ritma. Ritam se postiže ponavljanjem sličnih ili istih elemenata u kompoziciji. Ovaj način može biti posebno efektan u apstraktnoj umetnosti.Konačno, pažljivo odabiranje perspektive može dodati dubinu i dimenziju kompoziciji, stvarajući iluziju prostora i pokreta.Ukoliko se držite ovih saveta prilikom kreiranja svoje kompozicije, sigurno ćete stvoriti dinamično i upečatljivo delo koje će privući pažnju i izazvati emocije kod vašeg gledaoca.",
      datum: "14. Feb",
      kategorija: "Vizuelne umetnosti",
    },
    {
      blogPostName: "Kako dobro upotrebiti neverbalnu komunikaciju u glumi",
      opis: "U dramskim umetnostima, glumac koristi neverbalnu komunikaciju, kao što su gestikulacije, izrazi lica i telo, da bi izrazio emocije i ideje lika kojeg igra. Ova neverbalna komunikacija je jednako važna kao i verbalna komunikacija i ključna je za stvaranje uverljivog lika.",
      slika: "assets/img/dramske-blog.png",
      linkBlogPosta: "#",
      sadrzaj:
        "Jedan od najvažnijih aspekata neverbalne komunikacije u glumi je korišćenje tela. Glumci mogu da koriste svoje telo da bi izrazili emocije, kao što su ljutnja, strah ili radost. Na primer, čak i jednostavna promena položaja tela može da naglasi emociju koju glumac želi da prenese. Korišćenje gestikulacije je još jedan način na koji glumci koriste svoje telo da bi izrazili emocije. Još jedan aspekt neverbalne komunikacije u glumi su izrazi lica. Izraz lica može da naglasi ili promeni emociju koju glumac želi da prenese. Na primer, blago podignute obrve mogu da naglase iznenađenje ili nevericu, dok skupljeni mišići lica mogu da sugerišu ljutnju ili frustraciju. Kada glumci kombinuju verbalnu i neverbalnu komunikaciju, to često dovodi do najboljih performansi. Neverbalna komunikacija može da doprinese uverljivosti lika koji se igra i učini da publika bude više uključena u radnju. Takođe može da doprinese razumevanju lika na dubljem nivou i poboljša kvalitet predstave. Ukratko, neverbalna komunikacija je ključna za stvaranje uverljivog lika u dramskim umetnostima. Glumci koji dobro koriste svoje telo i izraze lica, imaju veće šanse da uspešno prenesu emocije i ideje koje žele da predstave. Stoga, ako želite da postanete bolji glumac, trebalo bi da se fokusirate na neverbalnu komunikaciju i naučite kako da je dobro koristite.",
      datum: "14. Feb",
      kategorija: "Dramske Umetnosti",
    },
    {
      blogPostName: "Kako muzika utiče na naše raspoloženje",
      opis: "Muzika je već vekovima poznata po svojoj moći da utiče na naše emocije i raspoloženje. Bez obzira da li slušamo nešto energično i brzo ili nešto opuštajuće i sporo, muzika ima moć da nam podigne raspoloženje ili nas umiri i opusti.",
      slika: "assets/img/muzicke-blog.png",
      linkBlogPosta: "#",
      sadrzaj:
        "Naučna istraživanja su pokazala da muzika aktivira različite delove mozga, uključujući one koji su odgovorni za emocije, motivaciju i memoriju. Takođe se pokazalo da muzika može uticati na hormone stresa u telu, smanjujući nivo kortizola i povećavajući nivo dopamina i endorfina.Različiti žanrovi muzike imaju različite efekte na naše raspoloženje. Na primer, klasična muzika može poboljšati fokus i produktivnost, dok rock muzika može biti korisna za smanjenje stresa i anksioznosti. Muzika takođe može biti korisna u terapijske svrhe, poput tretiranja depresije i posttraumatskog stresnog poremećaja.Zbog svega navedenog, važno je da biramo muziku koja će nam pomoći u postizanju određenog cilja, bilo da je to poboljšanje raspoloženja, smanjenje stresa ili bolje fokusiranje na radne zadatke. Kursevi muzičke umetnosti u našem institutu pružaju priliku da se detaljnije istraže različiti žanrovi i načini slušanja muzike, kao i da se upoznaju različiti instrumenti i tehnike sviranja.Uzmite u obzir sve prednosti koje muzika pruža, i prijavite se na naš kurs muzičke umetnosti. Pronađite svoj omiljeni žanr, otkrijte nove talente, i uživajte u lepoti muzike koja vas okružuje.",
      datum: "14. Feb",
      kategorija: "Muzičke umetnosti",
    },
    {
      blogPostName: "Oživljavanje zanata: Kako tradicionalne umetnosti i dalje inspirišu savremene umetnike",
      opis: "Nasleđe tradicionalne umetnosti predstavlja bogatstvo raznolikosti, istorije i kulture koja prenosi jedinstvene i neprocenjive vrednosti. Često se izgubljeni umetnički obrti, tehnike i zanati ponovo otkrivaju i obnavljaju kroz edukativne programe, čime se održava nasleđe i podstiče kreativni izraz.",
      slika: "assets/img/tradicionalne-blog.png",
      linkBlogPosta: "#",
      sadrzaj:
        "Kurs tradicionalnih umetnosti u našem institutu fokusiran je na očuvanje, istraživanje i učenje o različitim tradicionalnim tehnikama i zanatima, uključujući vez, tkanje, pletenje, izradu nakita i keramiku. Naši instruktori vode polaznike kroz istoriju ovih zanata i predstavljaju različite tehnike, materijale i alate koji se koriste u izradi predmeta. U ovom kursu, polaznici će se upoznati sa osnovama tradicionalnih umetnosti i naučiti kako da ih primene na svoje kreativne projekte. Ovaj kurs je idealan za one koji žele da ožive i prenesu svoje nasleđe kroz umetnički izraz, kao i za one koji jednostavno uživaju u učenju novih veština i zanata. Prijavite se na naš kurs tradicionalnih umetnosti i krenite u otkrivanje bogate istorije i kulture tradicionalnih zanata, učeći nove tehnike i stvarajući jedinstvene i neprocenjive umetničke radove koji će trajati kroz generacije.",
      datum: "14. Feb",
      kategorija: "Tradicionalne umetnosti",
    },
    {
      blogPostName: "6 načina za lični razvoj i usavršavanje kroz umetnost",
      opis: "Umetnost može biti snažan alat za lični razvoj i usavršavanje. Kroz umetničko izražavanje, možemo bolje razumeti sebe, svoje emocije i poglede na svet. Evo šest načina kako možete iskoristiti umetnost za svoj lični razvoj i rast.",
      slika: "assets/img/licno-blog.png",
      linkBlogPosta: "#",
      sadrzaj:
        "Istražite nove tehnike: Pokušajte sa novim materijalima i tehnikama koje niste ranije koristili. Ovo će vam pomoći da razvijete nove veštine i pogledate stvari iz drugačije perspektive. Izrazite svoje emocije: Umetnost je sjajan način da izrazite svoje emocije i osećanja. Bez obzira da li se radi o slikanju, pisanju poezije ili plesu, dozvolite sebi da se izrazite onako kako vam je prirodno. Radite na samopouzdanju: Kroz umetnost možemo poboljšati svoje samopouzdanje. Postavite sebi izazove i postepeno proširujte svoje granice. Upoznajte nove ljude: Pridružite se grupi ili klubu umetnika kako biste upoznali ljude sa sličnim interesovanjima i razmenili ideje. Kritički se osvrnite na svoj rad: Kada stvorite umetničko delo, pokušajte da ga sagledate sa kritičke distance. Razmislite o tome šta ste naučili iz tog procesa i kako biste mogli da ga poboljšate u budućnosti. Učite od drugih: Pratite rad drugih umetnika i proučavajte njihove tehnike. Ovo će vam pomoći da steknete nove ideje i pronađete svoj jedinstveni stil. Umetnost može biti predivan put za lični razvoj i rast. Iskoristite ovaj alat i uživajte u putovanju ka sopstvenom usavršavanju!",
      datum: "14. Feb",
      kategorija: "Lično usavršavanje",
    },
    {
      blogPostName: "Zašto je važno da umetnost bude ekološki svesna",
      opis: "Umetnost je uvek imala sposobnost da inspiriše ljude, da ih navede da razmišljaju i osećaju na nove načine. Međutim, u današnje vreme, kada je naš planet izložen brojnim ekološkim problemima, umetnici moraju da se fokusiraju i na svoj uticaj na životnu sredinu.",
      slika: "assets/img/ekologija-blog.png",
      linkBlogPosta: "#",
      sadrzaj:
        "Umetnost može biti potrošač materijala i resursa koji su štetni za planetu. Mnoge boje, lakovi i rastvarači sadrže hemikalije koje mogu biti opasne po zdravlje ljudi i životinja, a takođe mogu da zagade vodu i vazduh. Ali, umetnost takođe može biti kreativno rešenje za ekološke probleme. Umetnički projekti i instalacije mogu da promovišu održivost i ekološku svest, podstičući publiku na akciju. Umetnici mogu da koriste reciklirane materijale, da prikažu prirodne lepote i podsete nas na lepotu koju treba da štitimo. Kao umetnička institucija, naš cilj je da inspirišemo umetnike da preuzmu odgovornost za svoj uticaj na planetu. Kroz naše kurseve, umetnici će naučiti kako da koriste održive materijale, smanje količinu otpada i stvore radove koji podstiču na razmišljanje o važnosti očuvanja životne sredine. Umetnost je važna za društvo, ali moramo se pobrinuti da se izražavamo na način koji ne šteti planeti. Sa našim kursom ekološke svesnosti u umetnosti, možete postati deo rešenja i inspirisati druge da učine isto.",
      datum: "14. Feb",
      kategorija: "Ekologija",
    },
  ];
  function addBlogPosts() {
    for (let i = 0; i < blogPosts.length; i++) {
      console.log("slide", i, "loaded");
      let blogPostName = blogPosts[i].blogPostName,
        opis = blogPosts[i].opis,
        slika = blogPosts[i].slika,
        linkBlogPosta = blogPosts[i].linkBlogPosta,
        sadrzaj = blogPosts[i].sadrzaj,
        datum = blogPosts[i].datum,
        kategorija = blogPosts[i].kategorija;
      let templateBlogPosts = `
                <div class="swiper-slide">
                  <div class="relative flex items-center justify-center p-2 overflow-x-hidden bg-gray-400 ">
                    <div class="absolute w-[200%] left-0 h-[100%] animation-bg"></div>
                    <div class="flex flex-col aspect-[1/1.1] bg-white w-full  relative slide-shadow ">
                      <div class="h-1/3">
                        <img class="object-cover w-full h-full" src="${slika}" alt="" />
                      </div>
                      <div class="flex flex-col items-start justify-between p-4 h-2/3">
                          <div class="w-full">
                            <h3 class="font-sans text-lg font-bold">${blogPostName}</h3>
                            <p class="text-xs font-light py-1"><i class="mr-1 fa-solid fa-thumbtack fa-xs"></i>${kategorija}<i class="ml-3 mr-1 fa-solid fa-calendar fa-xs"></i>${datum}</p>
                          </div>
                          <p class="font-sans font-medium text-sm">${opis}</p>
                          <div class="flex items-end justify-start w-full pointer-events-auto clickable ">
                            <a href="${linkBlogPosta}" class="py-3 text-xs font-bold text-gray-700 z-30">DETALJNIJE<i class="mx-2 fa-lg fa-solid fa-caret-down"></i></a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>`;
      swiperWrapper3.insertAdjacentHTML("beforeend", templateBlogPosts);
    }
  }
  addBlogPosts();
  let swiper3 = new Swiper("#swiper3", {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    touchRatio: 0.3,
    longSwipes: true,
    preventInteractionOnTransition: true,
    longSwipesRatio: 0.1,
    autoplay: true,
    speed: 750,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      limitProgress: 5,
      progressMultiplier: 1,
      prev: {
        translate: ["-130%", 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 0,
      },
      next: {
        translate: ["130%", 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 0,
      },
    },
    navigation: {
      nextEl: "#next-3",
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
        slidesPerView: 1.3,
      },
    },
  });
});
