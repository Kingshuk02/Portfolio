import { FC, useMemo, useEffect } from "react";
            import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
            import Header from "./common/Header/Header.tsx";
            import Home from "./pages/Home/Home.tsx";
            import "./App.css";
            import About from "./pages/About/About.tsx";
            import { HomeData } from "./common/types/HomeData.tsx";
            import { AboutData } from "./common/types/AboutData.tsx";
            import Contact from "./pages/Contact/Contact.tsx";
            import ContactData from "./common/types/ContactData.tsx";
            import Projects from "./pages/Projects/Projects.tsx";
            import NotFound from "./NotFound.tsx";
            import Project from "./pages/Project/Project.tsx";
                        
            const App: FC = () => {
            
            useEffect(() => {
                const userTheme = window.localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                document.body.classList.add(userTheme || systemTheme)
                localStorage.setItem('theme', userTheme || systemTheme)
            }, []);
            
              const ProjectOr404 = () => {
                const { slug } = useParams();
                  if (slug && userData.slugs.length > 0 && userData.slugs.some((s: { slug: string }) => s.slug === slug)) {
                      return <Project userData={userData} />;
                  } else {
                      return <NotFound />;
                  }
              };
                        
              const userData = useMemo(() => ({
                name: "test test1",
                email: "kingshuktest@gmail.com",
                phone: "123456789",
                company: "ABCD",
                location: "A B C D",
                about: "A B C D",
                skills: ["Git","React","React Native","Next.js","NodeJs","Express.js","MongoDB","CSS","Tailwind CSS","HTML","JavaScript","Java"],
                projects: [{"name":"WeatherX","description":"Description","languages":["JavaScript"],"updatedAt":"2023-11-14T05:57:39.959Z","image":"https://picsum.photos/400/400","id":"381","slug":"weatherx"},{"name":"NotesX","description":"Description","languages":["JavaScript"],"updatedAt":"2023-11-14T13:47:15.161Z","image":"https://picsum.photos/400/400","id":"382","slug":"notesx"},{"name":"Feed0","description":"Description","languages":["JavaScript"],"updatedAt":"2023-11-14T13:47:25.302Z","image":"https://picsum.photos/400/400","id":"383","slug":"feed0"},{"name":"To Do App","description":"Description","languages":["JavaScript"],"updatedAt":"2023-11-14T13:47:37.740Z","image":"https://picsum.photos/400/400","id":"384","slug":"to-do-app"},{"name":"Calculator","description":"Description","languages":["JavaScript"],"updatedAt":"2023-11-14T13:47:53.841Z","image":"https://picsum.photos/400/400","id":"385","slug":"calculator"}], 
                work: [{"id":177,"company":"Company...","position":"Position...","startDate":"June 2021","endDate":"Present","description":"Description...","orderId":1,"image":"https://picsum.photos/400/400"},{"id":178,"company":"Company...","position":"Position...","startDate":"June 2021","endDate":"Present","description":"Description...","orderId":2,"image":"https://picsum.photos/400/400"}],
                role: "USER",
                profession: "Developer",
                services: ["UI_UX_DESIGN","CYBER_SECURITY","BLOCKCHAIN_DEVELOPMENT","WEB_DEVELOPMENT"],
                slugs: [{"slug":"weatherx","header":"Title","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"notesx","header":"Title","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"feed0","header":"Title","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"to-do-app","header":"Title","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"},{"slug":"calculator","header":"Title","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolore unde saepe qui sint. Neque aliquid quam corrupti voluptas nam magni sed, temporibus delectus suscipit illum repellendus modi! Fuga, nemo.","about":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ex similique fuga beatae officia nam unde, velit accusantium et inventore.","image":"https://picsum.photos/2000","overview":"Overview","platforms":"Web, Android, iOS","link":"https://google.com"}]
              }),
              []
            );
            
            const homeData = useMemo(
                    () => ({
                      headerOne: "I'm Kingshuk, a Developer from India",
                      descriptionOne: " ",
                      profileImage: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg",
                      sections: [                        {
                          type: "SKILL",
                          details: {
                            headerOne: "My Services & Skills",
                            order: 2
                          }
                        },
                        {
                          type: "STORY",
                          details: {
                            headerOne: "Experience",
                            descriptionOne: " ",
                            bulletOne: "Passionate about computer science from a young age.",
                            bulletTwo: "3 Years of Experience",
                            bulletThree: "Strong Problem Solving Skills",
                            imageOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b55bcb4baec57b75b66fd_desigining-experience-paperfolio-webflow-template.png",
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const aboutData = useMemo(
                    () => ({
                      headerOne: "Hello, Kingshuk",
                      iconOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b443e2bb8e12b5faf51a7_about-hero-rigth-image-paperfolio-webflow-template.png",
                      iconTwo: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b440128f648585c383865_about-hero-left-image-paperfolio-webflow-template.png",
                      iconThree: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b52d3639fb5250039e574_my-story-image-paperfolio-webflow-template.png",
                      headerTwo: "My story as a designer",
                      descriptionOne: "Architect of digital dreams, fueling creativity with caffeine, crafting marvels in code corridors, seeking enlightenment at the artistry-innovation crossroads.  ",
                      descriptionTwo: "Embarking on a journey fueled by curiosity and passion, I found solace in the world of code. From solving complex problems to creating user-friendly interfaces, every project has been a stepping stone in my development career. Continually learning and adapting, I've embraced new technologies and methodologies to build robust and efficient solutions. My path as a developer is more than a career; it's a lifelong pursuit of innovation, creativity, and technological advancement.",
                      sections: [
                        {
                          type: "STORY",
                          details: {
                            headerOne: "Experience",
                            descriptionOne: " ",
                            bulletOne: "Passionate about computer science from a young age.",
                            bulletTwo: "3 Years of Experience",
                            bulletThree: "Strong Problem Solving Skills",
                            imageOne: "https://assets.website-files.com/63360c0c2b86f80ba8b5421a/633b55bcb4baec57b75b66fd_desigining-experience-paperfolio-webflow-template.png",
                            order: 1
                          }
                        },
                      ],
                    }),
                    []
                  );
            
            const projectsPageData = useMemo(
                    () => ({
                      headerOne: "Projects",
                      descriptionOne: "Here are some of my recent projects. I've worked on a wide range of projects, from website and app design to branding and graphic design. Each project brings its own unique challenges and opportunities."
                    }),
                    []
                  );
            
            const contactData = useMemo(
                    () => ({
                      headerOne: "Contact Me",
                      descriptionOne: "Don't hesitate to get in touch! Whether you're looking for a design consult, interested in a collaboration, or just want to say hello, I'd be delighted to hear from you. I strive to respond promptly and look forward to our potential correspondence!",
                      sections: [
                      ],
                    }),
                    []
                  );
            
            return (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={<Home userData={userData} pageData={homeData as HomeData} />}
                  />
                  <Route
                    path="/contact"
                    element={
                      <Contact
                        pageData={contactData as ContactData}
                        userData={userData}
                      />
                    }
                  />
                  <Route
                    path="/projects"
                    element={<Projects pageData={projectsPageData} userData={userData} />}
                  />
                  <Route
                    path="/about"
                    element={
                      <About pageData={aboutData as AboutData} userData={userData} />
                    }
                  />
                  <Route path="/:slug" element={<ProjectOr404 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            );
          };
                    
          export default App;