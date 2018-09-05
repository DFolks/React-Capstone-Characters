import React from 'react';
import Arena from './arena';
import './createChar.css';
import SkillBlock from './skillBlock';
import InfoBlock from './infoBlock';
// import MeritsandMisc from './meritBlock';
// import HealthandStats from './healthBlock';

export default class CreateCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arenas: [
        {
          title: 'Mental',
          attributes: [
            {
              text: 'Intelligence',
              value: 1
            },
            {
              text: 'Wits',
              value: 1
            },
            {
              text: 'Resolve',
              value: 1
            }
          ]
        },
        {
          title: 'Physical',
          attributes: [
            {
              text: 'Strength',
              value: 1
            },
            {
              text: 'Dexterity',
              value: 1
            },
            {
              text: 'Stamina',
              value: 1
            }
          ]
        },
        {
          title: 'Social',
          attributes: [
            {
              text: 'Presence',
              value: 1
            },
            {
              text: 'Manipulation',
              value: 1
            },
            {
              text: 'Composure',
              value: 1
            }
          ]
        }
      ],
      skills: [
        {
          title: 'Mental (-3 Unskilled)',
          list: [
            {
              name: 'Academics',
              value: 0
            },
            {
              name: 'Computer',
              value: 0
            },
            {
              name: 'Crafts',
              value: 0
            },
            {
              name: 'Investigation',
              value: 0
            },
            {
              name: 'Medicine',
              value: 0
            },
            {
              name: 'Occult',
              value: 0
            },
            {
              name: 'Politics',
              value: 0
            },
            {
              name: 'Science',
              value: 0
            }
          ]
        },
        {
          title: 'Physical (-1 Unskilled)',
          list: [
            {
              name: 'Athletics',
              value: 0
            },
            {
              name: 'Brawl',
              value: 0
            },
            {
              name: 'Drive',
              value: 0
            },
            {
              name: 'Firearms',
              value: 0
            },
            {
              name: 'Larceny',
              value: 0
            },
            {
              name: 'Stealth',
              value: 0
            },
            {
              name: 'Survival',
              value: 0
            },
            {
              name: 'Weaponry',
              value: 0
            }
          ]
        },
        {
          title: 'Social (-1 Unskilled)',
          list: [
            {
              name: 'Animal Ken',
              value: 0
            },
            {
              name: 'Empathy',
              value: 0
            },
            {
              name: 'Expression',
              value: 0
            },
            {
              name: 'Intimidation',
              value: 0
            },
            {
              name: 'Persuasion',
              value: 0
            },
            {
              name: 'Socialize',
              value: 0
            },
            {
              name: 'Streetwise',
              value: 0
            },
            {
              name: 'Subterfuge',
              value: 0
            }
          ]
        }
      ],
      charInfo: [
        {
          title: 'info1',
          field: [
            {
              text: 'Name:',
              value: 'Adam'
            },
            {
              text: 'Age:',
              value: '23'
            },
            {
              text: 'Player:',
              value: 'David'
            }
          ]
        },
        {
          title: 'info2',
          field: [
            {
              text: 'Virtue:',
              value: 'Ambitious'
            },
            {
              text: 'Vice:',
              value: 'Greedy'
            },
            {
              text: 'Concept:',
              value: 'An awkward try-hard'
            }
          ]
        },
        {
          title: 'info3',
          field: [
            {
              text: 'Chronicle:',
              value: 'Seattle By Night'
            },
            {
              text: 'Faction:',
              value: 'Undecided'
            },
            {
              text: 'Group',
              value: 'Roll20 Forsaken'
            }
          ]
        }
      ]
    };
  }

  render() {
    const arenas = this.state.arenas.map((arena, index) => (
      <li className="arena-wrapper" key={index}>
        <Arena {...arena} />
      </li>
    ));
    const skills = this.state.skills.map((skill, index) => (
      <li className="skills-wrapper" key={index}>
        <SkillBlock {...skill} />
      </li>
    ));
    const infos = this.state.charInfo.map((info, index) => (
      <li className="info-wrapper" key={index}>
        <InfoBlock {...info} />
      </li>
    ));
    return (
      <div>
        <div className="infoBoard">
          <h2>Character Information</h2>
          <ul className="info">{infos}</ul>
        </div>
        <div className="attributeBoard">
          <h2>Attributes</h2>
          <ul className="arenas">{arenas}</ul>
        </div>
        <div className="lower-body">
          <div className="skillBoard">
            <h2>Skills</h2>
            <ul className="skills">{skills}</ul>
          </div>
          <div className="otherTraits">
            <h2>Other Traits</h2>
            <ul className="columns">
              <li className="col1">
                Merits
                {/* <ul className="meritList">
                  {meritsandMisc}
                </ul> */}
              </li>
              <li className="col2">
                Health
                {/* <ul>
                  {healthAndStats}
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
