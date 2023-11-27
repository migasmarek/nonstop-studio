import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import styles from '../page.module.css';
import projects from "@/scripts/projects";

export default function Carousel() {
    const list = projects;

    const listProjects = list.map(project =>
        <SplideSlide key={project.id} className={styles.splideSlide}>
            <Image
              src={`/projects/${project.src}`}
              alt={project.name}
              width={1728}
              height={1067}
              className={styles.splideImage}
            />
            <div className={styles.splideBar}>
                <div className={styles.projectDetails}>
                    <h1 className={styles.client}>{project.name}</h1>
                    <p className={styles.task}>{project.task}</p>
                </div>
                {/* <p className={styles.number}>{project.id}/{list.length}</p> */}
            </div>
        </SplideSlide>
        );

    return (
            <Splide
            hasTrack={false}
            className={styles.splide}
                aria-label="My images"
                options={{
                    rewind: true,
                    gap: "1rem",
                    type: "fade",
                    perPage: 1,
                    pagination: false,
                }}    
            >
                <SplideTrack className={styles.splideTrack}>
                    {listProjects}
                </SplideTrack>
                <div className="splide__arrows">
                    <button className={`${styles.splideArrow} ${styles.splideArrowPrev} splide__arrow splide__arrow--prev`}></button>
                    <button className={`${styles.splideArrow} ${styles.splideArrowNext} splide__arrow splide__arrow--next`}></button>
                </div>
            </Splide>
    );
}