import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 0) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="navs"></div>
      </div>

      <div className="body-content">
        <div className="content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            expedita quaerat, minima enim, sunt eius at ullam atque maxime
            quibusdam optio consectetur magnam culpa dolore totam eaque
            blanditiis rerum dolores. Consequatur accusamus quas vel, obcaecati
            veniam officiis. Id est molestias voluptatibus harum quo commodi
            quis cumque aperiam et! Cum minima a sapiente, quaerat inventore
            numquam magnam, optio quia minus amet similique, rem quasi dolore
            corrupti nihil eaque quae doloremque. Nesciunt ipsam ullam cum
            laboriosam quisquam, tempore modi voluptas dolore officiis animi
            repellat optio sapiente aliquam ducimus hic ut ab reprehenderit
            deserunt ratione quos ipsa officia placeat? Facere odit voluptatem
            non! Assumenda libero quaerat eaque incidunt aspernatur enim,
            blanditiis ad nihil saepe omnis? Nostrum id impedit quam quibusdam
            quia et voluptatem nihil aspernatur cumque quis, totam sit neque
            voluptas? Delectus veritatis amet necessitatibus voluptatibus sint
            repellendus id mollitia, quidem officia voluptate quae sed alias
            quam sunt explicabo accusantium, autem enim hic, accusamus impedit
            consectetur tempore? Iusto accusamus excepturi incidunt nobis
            reprehenderit est commodi mollitia quae reiciendis, inventore
            aspernatur, qui, laudantium ipsa autem. Reprehenderit perspiciatis
            adipisci similique distinctio sapiente, facere iste dolor saepe
            harum. Soluta dolore magni eum autem, veritatis quaerat illo itaque,
            ipsum quia repellendus nesciunt ex iure? Eligendi soluta nesciunt
            voluptatibus corporis veniam doloribus ea impedit, laudantium
            reprehenderit odio nisi aliquid at laborum voluptatem eum
            doloremque! Ex dolorum, a soluta error molestias, omnis libero quae
            ipsum, dignissimos pariatur id debitis quia excepturi eius? Deserunt
            perferendis repellat nisi rem earum sapiente doloremque ratione
            voluptas minima saepe, eius voluptates, cupiditate tempore laborum
            vel reiciendis ab maiores! Numquam totam nulla, consequuntur quam
            rerum exercitationem, cupiditate perspiciatis dolorem ipsam modi cum
            ipsa aperiam fugit laborum magni earum illo veniam, voluptas eaque
            minus alias ullam incidunt. Animi excepturi non deleniti ea ducimus
            quaerat, voluptatum quasi cupiditate quae ipsum tempora repudiandae
            nemo aperiam voluptatibus error cum placeat ab at nobis! Corrupti
            quis laudantium ex unde aut odio, quaerat asperiores nesciunt dolor
            alias pariatur quam nam voluptates excepturi eaque est, placeat
            aspernatur maiores eos. Temporibus quasi unde, adipisci eaque quam
            cumque rerum amet. Nemo dignissimos sit, excepturi ipsum fuga soluta
            minus eius repellat harum sint repudiandae, aperiam sunt? Quia optio
            eos aspernatur voluptas rem. Nulla sed fugiat eos? Aspernatur fugiat
            tempora distinctio fugit ea voluptates est animi, debitis,
            asperiores facere sed cumque earum modi itaque recusandae totam
            aliquam amet blanditiis, in voluptate natus necessitatibus
            voluptatum tenetur qui! Facilis, incidunt amet est aspernatur,
            tenetur officiis maxime praesentium nam iste obcaecati nemo
            exercitationem suscipit quidem quis ab doloremque repudiandae quos
            commodi neque! Id soluta rem repellat suscipit doloremque libero
            porro architecto perspiciatis labore eveniet ratione saepe dolorum
            molestias dignissimos optio aut, repellendus deserunt provident
            quis! Voluptatum dolores doloremque obcaecati sapiente inventore non
            voluptatibus dolor! Dignissimos consequuntur qui vero voluptas
            excepturi quibusdam, laborum nam voluptatum esse molestiae? Numquam
            perspiciatis nisi adipisci non delectus, repellat commodi quo iusto
            consectetur perferendis odit earum animi molestias laudantium ipsa
            iure, voluptate tempore aliquid quis magnam dolores excepturi. Hic
            dicta libero repellendus laboriosam ex esse mollitia magni natus
            distinctio, ipsum ad ipsa tempore, cupiditate recusandae, odio nam.
            Iste pariatur culpa saepe quasi hic nobis, non corporis totam
            quibusdam nostrum unde facere praesentium accusamus cumque est
            assumenda doloremque deserunt ducimus, neque similique distinctio.
            Similique, enim consectetur ea saepe blanditiis delectus natus
            nostrum, quae soluta, fugit magni nisi? Modi maiores aperiam, optio,
            iusto officia minima expedita quibusdam, aliquam corrupti quia
            accusamus? Eos neque, est provident nihil dicta amet aut? Numquam
            vel perferendis ratione dignissimos consequuntur, incidunt aperiam
            laboriosam quidem, asperiores assumenda cum unde dolor minima,
            voluptatem laudantium velit accusamus accusantium eum quam est
            veniam rem facere. Numquam laboriosam odit blanditiis? Saepe, id
            nihil, eaque praesentium distinctio quaerat consequuntur, itaque
            libero soluta ullam explicabo perspiciatis a. Pariatur placeat
            nostrum cumque mollitia sequi veniam maiores esse nam iusto aliquid
            corrupti provident dolorem tenetur, eius commodi aperiam! Fugiat
            veniam eligendi neque id harum adipisci. Perferendis iusto nulla
            molestias fuga quo distinctio placeat consequuntur odio non cumque.
            Quasi pariatur quisquam aspernatur, reprehenderit dolore numquam!
            Quidem est omnis non saepe reiciendis impedit, eligendi incidunt
            eveniet ducimus hic officiis eum libero recusandae enim voluptatum
            fugit mollitia! Rem nemo quibusdam hic atque illum mollitia
            laboriosam totam animi, cupiditate aut possimus saepe ipsam
            blanditiis officia ex aliquid voluptatibus similique culpa voluptate
            exercitationem! Officia quos vel quam nulla explicabo quasi quisquam
            cupiditate! Totam facere aliquid, impedit, nam nisi ducimus sunt id
            beatae doloremque sapiente repellat voluptates illum. Asperiores
            excepturi, voluptas similique incidunt facilis aut itaque quis
            possimus nam, numquam officiis autem qui accusamus eum. Aperiam
            magnam voluptatum ratione accusamus ducimus, voluptate minima ipsa!
            Explicabo porro facere excepturi cumque quos reprehenderit in vitae
            aut doloribus impedit quaerat, voluptatibus recusandae itaque ipsam
            perspiciatis nihil illo perferendis at facilis, veniam magni iure
            doloremque corrupti molestias. Neque dolorum non quod ipsam fugit
            molestias. Praesentium, veritatis ut facilis repudiandae unde
            sapiente quod adipisci facere possimus consequuntur voluptatibus
            sint nostrum omnis nulla est cumque. Provident dolores voluptatem
            odit dolorum, blanditiis fugit? Culpa tempora placeat repellat
            libero, debitis deserunt fuga nesciunt deleniti accusamus fugiat
            maxime, iure omnis sunt sapiente ullam rerum possimus explicabo!
            Facilis doloremque, recusandae esse provident placeat ea autem quas,
            qui maxime eum deleniti sit architecto enim? Doloremque sit, illo
            natus cum animi esse perspiciatis ducimus laboriosam rem. Non
            assumenda adipisci facilis qui, laudantium cum dignissimos deserunt
            ratione recusandae minus dolore quae impedit id nostrum voluptas
            voluptatem eligendi perspiciatis atque repellendus accusantium fuga
            aperiam repudiandae porro excepturi! Autem rem saepe quas veritatis
            dignissimos ut, minima provident voluptates vel natus consequuntur
            quia expedita? Dolore ducimus, repudiandae voluptatibus quaerat,
            enim repellendus, velit tempore a quod totam veniam cupiditate culpa
            fuga facere excepturi? Maxime quidem cum reprehenderit esse
            nesciunt, nulla provident. Sit excepturi corporis quaerat assumenda?
            Dignissimos esse hic sapiente, eum, rerum amet ipsam in temporibus
            voluptatibus, provident nulla harum dolorem porro aut vero? Vero
            officiis iure, voluptatem exercitationem harum cumque accusamus
            saepe soluta pariatur placeat in iusto. Doloremque cumque neque
            tempora quas fugiat adipisci consectetur deserunt ea at recusandae
            molestiae rem id, iure voluptatem cum vero itaque porro deleniti
            officiis modi perferendis, esse ab. In asperiores laudantium maiores
            cumque repellat, ea possimus, exercitationem dicta sit dignissimos
            earum voluptatum et dolore at fugit alias. Nihil vel beatae esse
            sapiente dolor natus totam deserunt inventore, qui iure maiores.
            Architecto aut, eveniet reprehenderit ratione minima quasi porro
            libero doloribus provident nulla quaerat suscipit mollitia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
