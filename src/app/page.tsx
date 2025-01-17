import NavBar from "@/components/NavBar";

import BarChart from "@/components/charts/BarChart";
import ColumnChart from "@/components/charts/ColumnChart";
import SubmitForm from "@/components/SubmitForm";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <>
      {<NavBar />}

      <main className="w-full h-full transition-all">
        <section
          id="home"
          className="relative min-h-screen w-full p-5 py-10 bg-hero bg-cover bg-fixed bg-right text-white"
        >
          <div className="relative z-20 mt-20 lg:mt-36 max-w-6xl mx-auto">
            <h1 className="text-5xl my-10 font-semibold lg:text-6xl text mt-14 lg:mt-2">
              Mozambique Developer <br/>
              Survey 1ᵅ Edição
            </h1>

            <DownloadButton />
          </div>
          <div className="absolute z-10 bg-black/80 w-full h-full top-0 left-0"></div>
        </section>

        <section
          id="about"
          className="relative min-h-screen w-full p-5 py-10 text-white"
        >
          <div className="relative z-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sobre</h2>
            <div className="w-full flex flex-wrap gap-6 justify-between">
              <div className="max-w-md flex flex-col gap-4">
                <p>
                 Bem-vindos à primeira edição da Mozambique Developer Survey, um inquérito abrangente organizado pela Mozdevz, que tem como objetivo desvendar o mundo dos desenvolvedores em Moçambique.</p>
                 <p>Nesta pesquisa, mergulhamos no universo da tecnologia e do desenvolvimento de soluções tecnológicas, desde aqueles que estão a começar a sua jornada até os profissionais experientes que estão a moldar o cenário tecnológico do país.
                </p>
              </div>
              <div className="max-w-md flex flex-col gap-4">
                <p>
                  O propósito desta iniciativa é obter uma visão real e detalhada das tendências predominantes no campo da tecnologia e desenvolvimento em Moçambique. Nosso objetivo é entender as preferências, habilidades e aspirações dos desenvolvedores, além de fornecer insights valiosos para ajudar a comunidade e o setor a crescer e prosperar.
                  Estamos empolgados em compartilhar com vocês os resultados da Mozambique Developer Survey e esperamos que este relatório seja uma fonte de inspiração, aprendizado e colaboração para todos os envolvidos no setor de tecnologia e desenvolvimento em nosso país.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full p-5 py-10 text-white relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-bold mb-6">LEARNING & EDUCATION</h2>

            <div className="flex flex-col w-full gap-20">
              <div className="flex justify-center  lg:justify-between flex-wrap gap-10">
                <div className="max-w-md flex flex-col gap-4">
                  <h3 className="text-4xl font-bold mb-6">
                    For learning to code, C is overtaking BASIC
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi magni voluptatibus quibusdam repellat dolorum,
                    incidunt ullam commodi minima ut tempora beatae, laborum eum
                    cum ipsam molestias nisi facere eius illo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi magni voluptatibus quibusdam repellat dolorum,
                    incidunt ullam commodi minima ut tempora beatae, laborum eum
                    cum ipsam molestias nisi facere eius illo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi magni voluptatibus quibusdam repellat dolorum,
                    incidunt ullam commodi minima ut tempora beatae, laborum eum
                    cum ipsam molestias nisi facere eius illo.
                  </p>
                </div>
                <div className="flex flex-col gap-4 max-w-lg w-full">
                  <h4 className="text-2xl font-normal mb-6">
                    What was the first language you learned to code in?
                  </h4>
                  <ColumnChart
                    data={{
                      series: [
                        {
                          name: "Percentagem das pessoas",
                          data: [8, 55, 57, 56, 45, 55, 12, 32],
                        },
                      ],
                      categories: [
                        "C",
                        "Python",
                        "Java",
                        "C#",
                        "PHP",
                        "Go",
                        "C++",
                        "JavaScript",
                      ],
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-center  lg:justify-between flex-wrap gap-10">
                <div className="max-w-md flex flex-col gap-4">
                  <h3 className="text-4xl font-bold mb-6">
                    Gen Z utilizes bootcamps to learn new skills
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi magni voluptatibus quibusdam repellat dolorum,
                    incidunt ullam commodi minima ut tempora beatae, laborum eum
                    cum ipsam molestias nisi facere eius illo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi magni voluptatibus quibusdam repellat dolorum,
                    incidunt ullam commodi minima ut tempora beatae, laborum eum
                    cum ipsam molestias nisi facere eius illo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi magni voluptatibus quibusdam repellat dolorum,
                    incidunt ullam commodi minima ut tempora beatae, laborum eum
                    cum ipsam molestias nisi facere eius illo.
                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-lg w-full">
                  <h4 className="text-2xl font-normal mb-6">
                    How do you learn new coding skills?
                  </h4>

                  <BarChart
                    data={{
                      series: [
                        {
                          name: "Percentagem das pessoas",
                          data: [8, 55, 57, 56, 45, 55, 12, 32],
                        },
                      ],
                      categories: [
                        "Youtube",
                        "Medium",
                        "Geek for Geeks",
                        "Udemy",
                        "Linked Learning",
                        "Documentação",
                        "Livros",
                        "Não aprendo",
                      ],
                    }}
                  />
                </div>
              </div>

              <div className="absolute h-72 w-full -bottom-10 left-0 backdrop-filter backdrop-blur-[2px] bg-gradient-to-b from-transparent to-secondary"></div>
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <SubmitForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
