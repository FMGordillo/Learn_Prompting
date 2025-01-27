import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import styles from "./styles.module.css";
import Course from './course';
import SignUp from './signup';

const courses = [{
  name: 'ChatGPT for Everyone',
  desc: "Learn about ChatGPT, one of the most advanced AI systems available today, and dive into the world of Generative AI.",
  special: true,
  isPro: false,
  percent: 30,
  count: 15,
  url: 'https://learn-prompting.webflow.io/course-chat-gpt-for-everyone',
  src: "https://assets-global.website-files.com/655b6730173650f3f66a0f98/655b6c0666126b34d261c42f_ChatGPT%20for%20Everyone%20-%20Course%20Page.png",
  srcset: "",
},
{
  name: 'Intro to Prompt Engineering',
  desc: 'Learn about the basics of Prompt Engineering, and how to effectively communicate with AI.',
  isPro: true,
  percent: 30,
  count: 12,
  url: 'https://learn-prompting.webflow.io/courses/intro-to-prompt-engineering',
  src: "https://assets-global.website-files.com/655b6730173650f3f66a0f98/655e35962450a3b5e5be1276_A%20blue%20and%20pink%20abstract%20background.jpg",
  srcset: "",
},
]



function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm"
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}

function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

      <div className={clsx("col", styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}

const securityWords = ['hack', 'security', 'inject', 'safety']

export default function DocItemFooter() {
  const { metadata, ...rest } = useDoc();
  console.log( metadata.description, rest.toc.map(t => t.value))
  const isSecurity = [...rest.toc.map(t => t?.value || ''), metadata.description].some(t => securityWords.some(w => t.toLowerCase().includes(w)))
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >

      <h2 style={{marginTop: 60, marginBottom: 32, fontSize: 32}}>
       Want to learn more?</h2>
      <div className={styles.courses}>
        {/* for oai */}
        {courses.filter(c => c).slice(1, 2).map(c => <Course key={c.name} src={c.src} srcset={c.srcset} {...c}/>)}
      </div>

      <br />
      <SignUp/>
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}

    </footer>
  );
}
