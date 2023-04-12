import Image from "next/image";
import userImage from "../../assets/images/userImage.png";

const BlogContent = () => {
  return (
    <article className=" py-2 lg:py-10">
      <header className="flex gap-2 md:gap-6   py-10">
        <Image
          src={userImage}
          className="grayscale"
          height={120}
          width={120}
          alt="user-image"
        />

        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="font-semibold text-2xl md:text-6xl">
            Why React dying
          </h2>
          <p>29.01.2023 — 4 min read</p>
        </div>
      </header>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        provident, nihil magnam perferendis quod architecto excepturi ipsum eum
        minus necessitatibus facilis sapiente iusto totam ipsam amet nobis neque
        officia minima.
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          suscipit explicabo quaerat nesciunt magnam! Asperiores enim
          consequuntur distinctio animi odit, maiores non sit ipsam minus eaque
          voluptate debitis omnis deserunt! Praesentium ratione eveniet
          reprehenderit cupiditate accusantium vero in amet consequatur officia
          ea itaque rerum quod provident ex alias labore expedita, consequuntur
          error eius neque aliquam ipsam libero. Consectetur, eum voluptate?
          Nihil animi reiciendis consectetur eum nulla, nobis quidem aliquid
          omnis facilis explicabo quaerat deserunt minus soluta magni eaque
          blanditiis iste aliquam corrupti, molestiae repellat. Neque veniam ab
          tempore. Odit, minima? Necessitatibus nostrum exercitationem ex
          repellendus libero voluptatem qui, deserunt ad quasi ipsam officia
          maxime aliquam, placeat fuga omnis. Amet sequi modi id dolor voluptate
          libero dolore numquam nam tenetur repellat. Voluptates est alias unde
          quis praesentium dolores nihil reiciendis quibusdam molestias,
          molestiae facere culpa voluptatibus itaque aperiam iure, aut explicabo
          commodi minus reprehenderit amet hic facilis. Possimus molestias
          exercitationem harum. Error sapiente placeat doloribus eos ullam, quos
          repellendus accusamus rem impedit, tenetur dolore sed molestias
          itaque. Laborum commodi earum molestias illo fugiat assumenda facilis?
          Iste fugiat vel maxime molestiae dicta. Obcaecati dignissimos deleniti
          et fuga voluptatem. Veniam architecto, laborum a itaque error labore
          enim odit quis dolor nostrum aliquam provident atque repudiandae eius
          inventore est mollitia tenetur doloribus ratione nisi. Quam veritatis
          cumque est quidem in porro ullam, reiciendis dolores ab corrupti
          minima vero unde doloremque illum autem, veniam tempora eligendi,
          maxime odit doloribus repudiandae distinctio! Dolores quasi quidem
          inventore. Mollitia at corrupti nemo alias quas, voluptatum commodi
          minima saepe? Earum amet debitis quo quaerat suscipit velit vel,
          beatae dolorem quasi quia iste minima ullam! Voluptas dolor quod optio
          sunt. Dolore quisquam magnam cupiditate exercitationem temporibus, ea
          odit esse sit commodi repudiandae laboriosam voluptatum distinctio
          rerum, laborum ad inventore veniam voluptate quae soluta quo sed
          tempora quidem sunt! Reiciendis, mollitia?
        </p>
      </div>
    </article>
  );
};

export default BlogContent;
