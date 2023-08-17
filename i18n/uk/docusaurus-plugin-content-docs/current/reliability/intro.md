---
sidebar_position: 1
---

# 🟢 Вступ

У цьому розділі йдеться про те, як отримати більш точний результат, а також про те, як здійснювати перевірку, щоб переконатися у достовірності вихідних даних.

Певною мірою більшість описаних вище методів пов’язана з підвищенням точності результату а, отже, достовірності, зокрема – самоузгодженості запитів(@wang2022selfconsistency). Однак існує низка інших методів, окрім основних стратегій постановки запитів, які можна використати для підвищення достовірності.

Усупереч нашим прогнозам, %%ВММ|LLM%% виявилися надійнішими в інтерпретації того, що до них *намагаються* донести в запиті. Вони відповідали на запити, написані з орфографічними помилками, розпливчасті та навіть беззмістовні запити(@webson2023itscomplicated). Утім, в їх роботі все ще виникають різні проблеми, зокрема «галюцинації» (@ye2022unreliability), помилкові пояснення з використанням методів %%CoT (Chain of Thought, хід думок)|CoT prompting%% (@ye2022unreliability) і численні упередження, серед яких упередження щодо більшості міток, упередження щодо новизни та щодо найпоширеніших знаків (@zhao2021calibrate). Крім того, zero-shot CoT (zero-shot – метод навчання, коли ставиться задача без прикладів розв'язання схожих проблем) може бути особливо упередженим, торкаючись делікатних тем (@shaikh2022second).

Вирішити ці проблеми можна такими способами: використовувати калібратори для видалення _апріорних_ упереджень, застосовувати засоби верифікації для оцінки результатів, а також сприяти різноманітності результатів.