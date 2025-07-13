import {
  Box,
  DashedBox,
  LinedBox,
  Icon,
  IconList,
  StarIcon,
  ColorsList,
  TechStack,
  BottomHalfHighlight,
  ContactLink,
  MiddleHighlight,
  StarHeader,
} from "@/components";
import SectionCover from "@/components/layouts/SectionCover";
const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function Home() {
  return (
    <>
      <DashedBox>
        Overboard is a time-based "floor is lava" survival game where
        shipwrecked pirates must navigate shark-filled waters and collect
        doubloons before the rescue boat arrives. The game takes place in a 10'
        x 6' play area using top-down floor and wall projections, with player
        movement tracked via a Kinect v2 sensor. The game is built in Unity
        6 for interactive projections and UI. As one of three developers in a
        team of 10, I created 3D assets, implemented player controls and
        feedback, integrated Kinect input, mapped projectors, and maintained a
        Github Projects task board.
      </DashedBox>
      <StarIcon />
      <StarIcon filled />
      <h1>
        <MiddleHighlight>
          Port
          <br />
          folio
        </MiddleHighlight>
      </h1>
      <h2>Mixed Reality</h2>
      <h3>Bombing Science</h3>
      <h4>Tech Stack</h4>
      <IconList
        icons={"arduino figma typescript javascript blender illustrator"}
      />
      <SectionCover backgroundColor={"#3CBBE6"}></SectionCover>
      <ColorsList colors={"red blue green lime black periwinkle"} />
      <TechStack
        technologies={"arduino figma typescript javascript blender illustrator"}
      />
      <h2>
        <StarHeader>
          <BottomHalfHighlight>hi text</BottomHalfHighlight>
        </StarHeader>
      </h2>
      <h3>
        <BottomHalfHighlight>hi text</BottomHalfHighlight>
      </h3>

      <ContactLink icon={"github"} url={"https://github.com/maffiemaffie"}>
        check out my GitHub!
      </ContactLink>
    </>
  );
}
