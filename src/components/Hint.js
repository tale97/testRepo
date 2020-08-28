import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Music from "./Music";
import { katakanaToRomaji, katakanaHint } from "../jap-char";
import { MEDIA_BASE_URL_CHAR } from "../constants";
import "../scss/components/Hint.scss";

const parseoutUnderlineText = (sentence) => {
  // replace <b> and </b> with comma
  sentence = sentence.replace(/<\/?u>/g, ",");
  return sentence.split(",");
};

class Hint extends React.Component {
  render() {
    const romaji = katakanaToRomaji[this.props.currentHintedChar];
    const sentenceFragments = parseoutUnderlineText(
      katakanaHint[this.props.currentHintedChar].shortHint
    );
    const modified_romaji = romaji === "n'" ? "n" : romaji;
    const audioLink = MEDIA_BASE_URL_CHAR + modified_romaji + ".mp3";

    return (
      <Card className={`hint-card`} onClick={this.onClickHandler}>
        <div className="hint-card-content">
          <div>
            <img
              src={`${katakanaHint[this.props.currentHintedChar].imageLink}`}
              className={`hint-card-image`}
              alt="Hint Card"
            />
          </div>
          <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Typography variant="body2" component="p">
              <div className="hint-text">
                {sentenceFragments[0]}
                <u>{sentenceFragments[1]}</u>
                {sentenceFragments[2]}
              </div>
            </Typography>
            <Music
              audioLink={audioLink}
              delay={0}
              noStoreUpdateWhenEnded={false}
            />
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default Hint;
