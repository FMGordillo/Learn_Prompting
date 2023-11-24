"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4853],{20278:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>s,toc:()=>o});var i=e(87462),t=(e(67294),e(3905));const l=e.p+"assets/images/knowledge_generation-197796038929771b12d9636d5328f69a.webp",d=e.p+"assets/images/gen_k_p1-d66e2a37226275a4e6cbd4e8ec46feca.webp",r=e.p+"assets/images/recitation-671b162f9b90e2dabfa1c00a2b5e3e66.webp";var g=e(39145);const u={sidebar_position:7},m="\ud83d\udfe1 Pengetahuan yang Dihasilkan",s={unversionedId:"intermediate/generated_knowledge",id:"intermediate/generated_knowledge",title:"\ud83d\udfe1 Pengetahuan yang Dihasilkan",description:"Ide di balik pendekatan pengetahuan yang dihasilkan (@liu2021generated) adalah meminta %%LLM|LLM%% untuk menghasilkan informasi yang mungkin berguna tentang pertanyaan/prompt tertentu sebelum menghasilkan tanggapan akhir.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/intermediate/generated_knowledge.md",sourceDirName:"intermediate",slug:"/intermediate/generated_knowledge",permalink:"/id/docs/intermediate/generated_knowledge",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/generated_knowledge.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Self-Consistency",permalink:"/id/docs/intermediate/self_consistency"},next:{title:"\ud83d\udfe1 Least to Most Prompting",permalink:"/id/docs/intermediate/least_to_most"}},p={},o=[{value:"Pendekatan satu prompt",id:"pendekatan-satu-prompt",level:2},{value:"Pendekatan dua prompt",id:"pendekatan-dua-prompt",level:2},{value:"Penggunaan lainnya",id:"penggunaan-lainnya",level:2},{value:"Diskusi yang lebih teknis",id:"diskusi-yang-lebih-teknis",level:2},{value:"Menghasilkan Pengetahuan",id:"menghasilkan-pengetahuan",level:3},{value:"Integrasi Pengetahuan",id:"integrasi-pengetahuan",level:3},{value:"Recitation-Augmented Language Models",id:"recitation-augmented-language-models",level:2},{value:"Catatan",id:"catatan",level:2}],k=(h="LazyLoadImage",function(a){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",a)});var h;const b={toc:o},c="wrapper";function y(a){let{components:n,...e}=a;return(0,t.kt)(c,(0,i.Z)({},b,e,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-pengetahuan-yang-dihasilkan"},"\ud83d\udfe1 Pengetahuan yang Dihasilkan"),(0,t.kt)("p",null,"Ide di balik pendekatan pengetahuan yang dihasilkan",(0,t.kt)("sup",{parentName:"p",id:"fnref-1"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," adalah meminta ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_16_1700800917108","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(g.u,{anchorId:"LLM_2_16_1700800917108",clickable:!0,mdxType:"Tooltip"})," untuk menghasilkan informasi yang mungkin berguna tentang pertanyaan/prompt tertentu sebelum menghasilkan tanggapan akhir."),(0,t.kt)("p",null,"Misalnya, jika Anda ingin menulis blog post kecil tentang hewan tertentu, seperti ",(0,t.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kermode_bear"},"beruang hantu"),". Sebelum meminta ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_18_1700800917108","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(g.u,{anchorId:"LLM_2_18_1700800917108",clickable:!0,mdxType:"Tooltip"})," untuk menulis pos blog, Anda dapat memintanya untuk menghasilkan beberapa fakta tentang Spirit bears. Ini akan membantu LLM menulis posting blog yang lebih informatif. Ada dua cara sederhana untuk melakukannya."),(0,t.kt)("h2",{id:"pendekatan-satu-prompt"},"Pendekatan satu prompt"),(0,t.kt)("p",null,"Pendekatan pertama meminta LLM untuk menghasilkan pengetahuan kemudian menulis posting, semuanya dengan satu prompt."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Hasilkan 4 fakta tentang beruang Kermode, kemudian menggunakan fakta-fakta ini untuk menulis sebuah pos blog singkat menggunakan informasi:\n// highlight-start\nBeruang Kermode, juga dikenal sebagai beruang roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di wilayah pesisir British Columbia, Kanada. \n\n1. Beruang Kermode adalah subspesies unik dari beruang hitam Amerika, dengan sekitar 10% populasi memiliki bulu putih. \n\n2. Beruang Kermode adalah simbol bagi bangsa First Nations di British Columbia, dan dianggap sebagai hewan roh. \n\n3. Beruang Kermode adalah bagian penting dari ekosistem, membantu menyebar benih dan menjaga keseimbangan hutan. \n\n4. Beruang Kermode adalah spesies yang dilindungi, dan populasi mereka dipantau secara ketat oleh pemerintah provinsi.\n\nBeruang Kermode adalah hewan yang unik dan istimewa yang ditemukan di wilayah pesisir British Columbia, Kanada. Sekitar 10% populasi subspesies beruang hitam Amerika ini memiliki bulu putih, menjadikan mereka pemandangan langka. Beruang Kermode adalah simbol dari orang-orang First Nations British Columbia, dan dianggap sebagai hewan roh. Ini adalah bagian penting dari ekosistem, membantu menyebarkan biji-bijian dan menjaga keseimbangan hutan. Beruang Kermode adalah spesies yang dilindungi, dan populasi nya dipantau secara ketat oleh pemerintah provinsi. Ini adalah hewan yang indah dan megah, dan penting bagi kita untuk melakukan bagian kita dalam melindungi dan melestarikan spesies ini.\n// highlight-end\n")),(0,t.kt)("h2",{id:"pendekatan-dua-prompt"},"Pendekatan dua prompt"),(0,t.kt)("p",null,"Dalam pendekatan ini, kami pertama-tama meminta ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_48_1700800917108","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(g.u,{anchorId:"LLM_0_48_1700800917108",clickable:!0,mdxType:"Tooltip"})," untuk menghasilkan fakta tentang beruang:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Hasilkan 10 fakta tentang beruang Kermode:\n// highlight-start\n1. Beruang Kermode, juga dikenal sebagai Beruang Roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada.\n\n2. Beruang Kermode memiliki bulu putih atau berwarna krim yang unik, yang disebabkan oleh gen resesif.\n\n3. Beruang Kermode merupakan simbol harapan dan pembaruah bagi suku asli British Columbia.\n\n4. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies yang memerlukan perhatian khusus oleh Komite Status Satwa Terancam di Kanada.\n// highlight-end\n")),(0,t.kt)("p",null,"Kemudian, kami menginput informasi tersebut ke dalam prompt lain untuk menulis postingan blog:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"1. Beruang Kermode, juga dikenal sebagai Beruang Roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada.\n\n2. Beruang Kermode memiliki bulu putih atau berwarna krim yang unik, yang disebabkan oleh gen resesif.\n\n3. Beruang Kermode adalah simbol harapan dan pembaruan bagi masyarakat First Nations British Columbia.\n\n4. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies yang memerlukan perhatian khusus oleh Komite Status Satwa Terancam di Kanada.\n\nGunakan fakta di atas untuk menulis satu paragraf pos blog tentang beruang Kermode:\n\n// highlight-start\n\nBeruang Kermode, juga dikenal sebagai Beruang Roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada. Beruang unik ini memiliki bulu yang putih atau berwarna krem, disebabkan oleh gen resesif, dan merupakan simbol harapan dan pembaharuan bagi orang-orang First Nations di British Columbia. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies yang memiliki kepentingan khusus oleh Komite Status Kehidupan Satwa Terancam di Kanada, menjadikannya bagian penting dari keanekaragaman hayati di wilayah ini.\n\n// highlight-end\n")),(0,t.kt)("p",null,"Saya merekomendasikan pendekatan kedua ini karena dapat menghasilkan konten yang lebih panjang dengan lebih dapat diandalkan."),(0,t.kt)("h2",{id:"penggunaan-lainnya"},"Penggunaan lainnya"),(0,t.kt)("p",null,"Pendekatan pengetahuan yang dihasilkan sebenarnya diperkenalkan untuk tugas yang benar-benar berbeda, yaitu menjawab pertanyaan sulit. Pertimbangkan pertanyaan berikut, yang GPT-3 menjawab dengan salah: "),(0,t.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIGxhcmdlciB0aGFuIENvbmdvLiIsInByb21wdCI6IldoaWNoIGNvdW50cnkgaXMgbGFyZ2VyLCBDb25nbyBvciBTb3V0aCBBZnJpY2E%2FIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"200px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("p",null,":::catatan\nContoh ini mungkin tidak akurat. Kami sedang bekerja untuk merevisinya.\n:::"),(0,t.kt)("br",null),(0,t.kt)("p",null,"Jika kita pertama kali meminta ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_31_1700800917109","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(g.u,{anchorId:"LLM_0_31_1700800917109",clickable:!0,mdxType:"Tooltip"})," untuk menghasilkan fakta tentang Kongo dan Afrika Selatan, kita dapat menggunakan informasi tersebut untuk menjawab pertanyaan dengan benar. Dalam teori, ini mirip dengan %%CoT|CoT memicu%%, karena pada dasarnya kami membuat LLM menghasilkan penalaran intermediat dalam bentuk fakta terkait."),(0,t.kt)("p",null,"Mari mulai langkah demi langkah, ",(0,t.kt)("em",{parentName:"p"},"menghasilkan pengetahuan"),". Kita dapat meminta ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_21_1700800917109","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(g.u,{anchorId:"LLM_2_21_1700800917109",clickable:!0,mdxType:"Tooltip"})," untuk menghasilkan fakta tentang Kongo dan Afrika Selatan:"),(0,t.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy4iLCJwcm9tcHQiOiJHZW5lcmF0ZSBzb21lIGtub3dsZWRnZSBhYm91dCB0aGUgc2l6ZXMgb2YgU291dGggQWZyaWNhIGFuZCBDb25nbzoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("br",null),(0,t.kt)("p",null,"Selanjutnya, mari kita gunakan pengetahuan itu untuk menjawab pertanyaan dengan benar. Ini adalah langkah ",(0,t.kt)("em",{parentName:"p"},"integrasi pengetahuan"),"!"),(0,t.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQ29uZ28gaXMgbGFyZ2VyIHRoYW4gU291dGggQWZyaWNhLlxuIiwicHJvbXB0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy5cblxuV2hpY2ggY291bnRyeSBpcyBsYXJnZXIsIENvbmdvIG9yIFNvdXRoIEFmcmljYT8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("h2",{id:"diskusi-yang-lebih-teknis"},"Diskusi yang lebih teknis"),(0,t.kt)("p",null,"Meskipun kasus penggunaan di atas mirip dengan cara pengetahuan yang dihasilkan diperkenalkan secara awal, namun tidak persis sama. Konten di bawah ini mencakup konteks yang lebih teknis di mana pendekatan ini diperkenalkan. Ini mengikuti pola dua langkah menengah (generasi pengetahuan dan integrasi pengetahuan) yang kita lihat di atas."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)("img",{src:l,style:{width:"750px"}})),(0,t.kt)("div",{style:{textAlign:"center"}},"Pengetahuan yang Dihasilkan (Liu et al.)"),(0,t.kt)("h3",{id:"menghasilkan-pengetahuan"},"Menghasilkan Pengetahuan"),(0,t.kt)("p",null,"Dalam langkah pembentukan pengetahuan, ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_39_1700800917109","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(g.u,{anchorId:"LLM_0_39_1700800917109",clickable:!0,mdxType:"Tooltip"})," diminta untuk menghasilkan sekumpulan fakta mengenai pertanyaan ****. LLM dipicu dalam mode few-shot seperti yang terlihat di bawah ini. M penyelesaian yang berbeda dihasilkan menggunakan prompt yang sama ini (mirip dengan pendekatan konsistensi diri)."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(k,{src:d,style:{width:"500px"},mdxType:"LazyLoadImage"})),(0,t.kt)("div",{style:{textAlign:"center"}},"Contoh Pengetahuan yang Dihasilkan (Liu et al.)"),(0,t.kt)("h3",{id:"integrasi-pengetahuan"},"Integrasi Pengetahuan"),(0,t.kt)("p",null,'Selanjutnya, kita menghasilkan pertanyaan "berpengetahuan ditambahkan" dan meminta ',(0,t.kt)("a",{parentName:"p",id:"LLM_0_83_1700800917109","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(g.u,{anchorId:"LLM_0_83_1700800917109",clickable:!0,mdxType:"Tooltip"})," dengan mereka untuk mendapatkan jawaban akhir. Cara termudah untuk memahaminya adalah melalui contoh."),(0,t.kt)("p",null,"Mari kita asumsikan kita mencoba menjawab ",(0,t.kt)("strong",{parentName:"p"},"pertanyaan"),' "Kebanyakan kangguru memiliki <mask',">",' anggota badan". Anggaplah bahwa pada langkah generasi pengetahuan kita telah menghasilkan 2 pengetahuan (M=2):'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pengetahuan 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"Kanguru adalah hewan marsupial yang hidup di Australia."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pengetahuan 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"Kanguru adalah hewan marsupial yang hidup di Australia.")))),(0,t.kt)("p",null,"Sekarang, kita menggabungkan setiap pengetahuan dengan pertanyaan yang dihasilkan untuk menghasilkan pertanyaan berbasis pengetahuan:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Penambahan Pengetahuan 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"Sebagian besar Kanguru memiliki &lt;mask\\&gt; anggota tubuh. Pengetahuan 1: <code>Kanguru adalah hewan marsupial yang hidup di Australia."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Penambahan Pengetahuan 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"Kanguru-Kanguru kebanyakan memiliki <mask\\> anggota tubuh. Kanguru adalah marsupial yang memiliki 5 anggota tubuh.")))),(0,t.kt)("p",null,"Kemudian kami mengajukan pertanyaan yang diperkaya dengan pengetahuan ini kepada LLM dan mendapatkan proposal jawaban akhir:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Jawaban 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"4"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Jawaban 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"5")))),(0,t.kt)("p",null,"Kita memilih jawaban dengan probabilitas tertinggi sebagai jawaban akhir. Probabilitas tertinggi bisa jadi probabilitas softmax dari token jawaban, atau probabilitas log dari token jawaban."),(0,t.kt)("h2",{id:"recitation-augmented-language-models"},"Recitation-Augmented Language Models"),(0,t.kt)("p",null,"Pendekatan model bahasa recitation-augmented",(0,t.kt)("sup",{parentName:"p",id:"fnref-2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," ini mirip dengan pengetahuan yang dihasilkan (pada dasarnya sama). Namun, jauh lebih sederhana dibandingkan dengan implementasi formal dari pengetahuan yang dihasilkan."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(k,{src:r,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,t.kt)("p",null,"Ide di sini adalah untuk memberikan beberapa informasi penembak LLM untuk menghasilkan jawaban ",(0,t.kt)("em",{parentName:"p"},"dan")," dalam langkah yang sama **. Fakta bahwa ia meresapi/menghasilkan pengetahuan dan menjawab pertanyaan dalam satu langkah yang sama adalah perbedaan utama dari pendekatan pengetahuan yang dihasilkan."),(0,t.kt)("p",null,"Untuk mengulangi, pendekatan ini mendorong model dengan beberapa contoh (pertanyaan, pengulangan, jawaban), kemudian mengajukan pertanyaan. Para penulis mencatat bahwa pendekatan ini dapat digabungkan dengan konsistensi diri atau jalur penyelesaian ganda."),(0,t.kt)("h2",{id:"catatan"},"Catatan"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pengetahuan yang dihasilkan menunjukkan peningkatan pada berbagai dataset pengetahuan umum.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pengetahuan yang sesuai dengan jawaban yang dipilih disebut pengetahuan yang ",(0,t.kt)("em",{parentName:"p"},"dipilih"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Dalam praktiknya, Anda dapat mengambil jawaban yang paling sering muncul sebagai jawaban terakhir."))),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1"},"Liu, J., Liu, A., Lu, X., Welleck, S., West, P., Bras, R. L., Choi, Y., & Hajishirzi, H. (2021). Generated Knowledge Prompting for Commonsense Reasoning.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,t.kt)("li",{parentName:"ol",id:"fn-2"},"Sun, Z., Wang, X., Tay, Y., Yang, Y., & Zhou, D. (2022). Recitation-Augmented Language Models.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0}}]);