import "./Box.scss";

const Box = () => {
  const selfcast = true;
  const insight = true;
  const bastionStacks = 5;
  const holyPower = 3;
  const mastery = 19509;
  const masteryMod = 8 + mastery * 0.001666686326662364;
  const vengeance = 200000;
  const baseSpellPower = 27042;
  const spellPower = baseSpellPower + vengeance / 2;
  const selfcastMod = selfcast ? 1.5 : 1;
  const insightMod = insight ? 1.05 : 1;
  const bastionMod = 1 + ((10 + masteryMod) * bastionStacks) / 100;

  const mods = holyPower * selfcastMod * insightMod * bastionMod;

  const torchBaseHeal = 711;
  const torchSpellMod = 0.0819;

  const finalHot = Math.floor(
    0.5 + (torchBaseHeal + torchSpellMod * spellPower) * mods
  );

  const asd40 = (40.51 - 8) / 19509;
  const asd32 = (32.71 - 8) / 14828;
  const asd44 = (44.56 - 8) / 21937;
  const asd37 = (37.97 - 8) / 17979;
  const asd3586 = (35.86 - 8) / 16718;
  const asd3519 = (35.19 - 8) / 16315;
  const asd34 = (34.56 - 8) / 15936;
  const asd31 = (31.93 - 8) / 14357;
  const asd198 = (19.8 - 8) / 7081;
  const asd1905 = (19.05 - 8) / 6631;
  const asd17 = (17.85 - 8) / 5908;
  const asd16 = (16.65 - 8) / 5188;
  const asd13 = (13.0 - 8) / 3000;

  const avg =
    (asd40 +
      asd32 +
      asd44 +
      asd37 +
      asd3586 +
      asd3519 +
      asd34 +
      asd31 +
      asd198 +
      asd1905 +
      asd17 +
      asd16 +
      asd13) /
    13;

  const asd40qq = 8 + 19509 * avg;
  const asd32qq = 8 + 14828 * avg;
  const asd44qq = 8 + 21937 * avg;
  const asd37qq = 8 + 17979 * avg;
  const asd3586qq = 8 + 16718 * avg;
  const asd3519qq = 8 + 16315 * avg;
  const asd34qq = 8 + 15936 * avg;
  const asd31qq = 8 + 14357 * avg;
  const asd198qq = 8 + 7081 * avg;
  const asd1905qq = 8 + 6631 * avg;
  const asd17qq = 8 + 5908 * avg;
  const asd16qq = 8 + 5188 * avg;
  const asd13qq = 8 + 3000 * avg;

  return (
    <>
      <div>{finalHot}</div>
      <div>{avg}</div>
      <div>
        40.51% = 19509 ---- {asd40} ---- {asd40qq}
      </div>
      <div>
        32.71% = 14828 ---- {asd32} ---- {asd32qq}
      </div>
      <div>
        44.56% = 21937 ---- {asd44} ---- {asd44qq}
      </div>
      <div>
        37.97% = 17979 ---- {asd37} ---- {asd37qq}
      </div>
      <div>
        35.86% = 16718 ---- {asd3586} ---- {asd3586qq}
      </div>
      <div>
        35.19% = 16315 ---- {asd3519} ---- {asd3519qq}
      </div>
      <div>
        34.56% = 15936 ---- {asd34} ---- {asd34qq}
      </div>
      <div>
        31.93% = 14357 ---- {asd31} ---- {asd31qq}
      </div>
      <div>
        19.8 % = 7081 ---- {asd198} ---- {asd198qq}
      </div>
      <div>
        19.05% = 6631 ---- {asd1905} ---- {asd1905qq}
      </div>
      <div>
        17.85% = 5908 ---- {asd17} ---- {asd17qq}
      </div>
      <div>
        16.65% = 5188 ---- {asd16} ---- {asd16qq}
      </div>
      <div>
        13.0 % = 3000 ---- {asd13} ---- {asd13qq}
      </div>
    </>
  );
};

export default Box;
