import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
    base: './',
    plugins: [
        tailwindcss(),
        ViteEjsPlugin({
      // Här kan du lägga in data som du vill använda i din HTML
            title: "Ella Bäckström - CV",
            user: {
                phone: "+46768001636",
                email: "ellabackstrom02@gmail.com",
                location: "Malmö Sweden",
                linkedin: "https://www.linkedin.com/in/ella-b%C3%A4ckstr%C3%B6m-939969265/"
            },
            experience: {
                title: "Akademisk Bakgrund",

                when: "Augusti 2025 - Nuvarande - Förväntad Examen 2027",
                subTitle: "Master i Sustainable Urban Design",
                where: "Lunds Tekniska Högskola (LTH)",
                description: "Description",

                when1: "Augusti 2022 - Juni 2025",
                subTitle1: "Kandidatexamen i Fysisk Planering",
                where1: "Bleking Tekniska Högskola (BTH)",
                description1: "Description1",

                when2: "When",
                subTitle2: "Sub Title",
                where2: "Where",
                description2: "Description2",

                courses: ["Geografiska Informationssystem och statistik",
                    "Översiktlig planering & Detaljplanering",
                    "Naturresurser och landskap",
                    "Plan- och Miljörätt",
                    "Planeringsekonomi och genomförande",
                    "Infrastruktur och mobilitet",
                    "Strategisk planering",
                    "Klimatsmart arkitektur och design",
                    "Stadsåterbruk",
                    "Stadsrum I & II",
                    "Komplexa stadsbyggnadsprojekt",
                    "Stadskvalitet och urban form",
                ],
            },

            skills: {
                subTitle: "Verktyg och Program",
                list: [
                    "Adobe Illustrator",
                    "Adobe InDesign",
                    "Adobe Photoshop",
                    "AutoCad",
                    "SketchUp",
                    "Rhino",
                    "ArcGIS",
                    "Twinmotion",
                ],
                subTitle1: "Design Inriktning",
                list1: [
                    "Fysisk Planering",
                    "Urban Design",
                    "Landskapsarkitektur",
                    "Klimatsmart Arkitektur",
                ],
                subTitle2: "Språk",
                list2: [
                    "Engelska",
                    "Svenska",
                ],
            },
        }),
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    }
});