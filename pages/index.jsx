import {
  Hero,
  Bio,
  StarHeader,
  SectionCover,
  SectionDescription,
  SectionDescriptionContent,
  SectionDescriptionTitle,
  SectionDescriptionImage,
  SectionDescriptionList,
  TechStack,
  ColorsList,
  Gallery,
  BottomHalfHighlight,
  BusinessCards,
  ThankYou,
} from "@/components";

export default function Home() {
  return (
    <div className="wrapper">
      <Hero />
      <Bio />
      {/* mixed reality */}
      <article>
        <header>
          <h2>
            <StarHeader>
              <BottomHalfHighlight>Mixed Reality</BottomHalfHighlight>
            </StarHeader>
          </h2>
        </header>
        <article>
          <SectionCover backgroundColor={"#3CBBE6"}>
            <img src="/overboard/scully-logo.svg" alt="overboard" />
          </SectionCover>
          <SectionDescription bigImage>
            <SectionDescriptionTitle size="large">
              <h3>
                <img src="/overboard/logo.svg" alt="overboard" />
              </h3>
            </SectionDescriptionTitle>
            <SectionDescriptionImage>
              <img
                src="/overboard/crates-texture.png"
                alt="3D models from the game"
              ></img>
            </SectionDescriptionImage>
            <SectionDescriptionContent>
              <p>
                Overboard is a time-based "floor is lava" survival game where
                shipwrecked pirates must navigate shark-filled waters and
                collect doubloons before the rescue boat arrives. The game takes
                place in a 10' x 6' play area using top-down floor and wall
                projections, with player movement tracked via a Kinect v2
                sensor. The game is built in Unity 6 for interactive projections
                and UI.
              </p>
              <p>
                As one of three developers in a team of 10, I created 3D assets,
                implemented player controls and feedback, integrated Kinect
                input, mapped projectors, and maintained a Github Projects task
                board.
              </p>
            </SectionDescriptionContent>
            <SectionDescriptionList>
              <TechStack technologies={"unity github blender figma"} />
            </SectionDescriptionList>
          </SectionDescription>
          <Gallery
            width={2320}
            height={3191}
            src={"/overboard/gallery.png"}
            alt={
              "gallery showing debug screens with objects' bounding boxes highlighted, platforms with UI options for players to step on, a view of the Kinect that watches the scene, and players stepping on platforms that rock and bob in real-time."
            }
          />
        </article>
      </article>
      {/* branding */}
      <article>
        <header>
          <h2>
            <StarHeader>
              <BottomHalfHighlight>Branding</BottomHalfHighlight>
            </StarHeader>
          </h2>
        </header>
        <article>
          <SectionCover backgroundColor={"#796efc"}>
            <img src="/outspoken/logo-mono.svg" alt="outspoken" />
          </SectionCover>
          <SectionDescription smallImage>
            <SectionDescriptionTitle size="small">
              <h3>
                <img src="/outspoken/wordmark.svg" alt="outspoken" />
              </h3>
            </SectionDescriptionTitle>
            <SectionDescriptionImage>
              <img src="/outspoken/logo-rainbow.svg" alt="outspoken logo" />
            </SectionDescriptionImage>
            <SectionDescriptionContent>
              <p>
                OUTspoken strives to bring marginalized communities together and
                amplify the voices of the unheard. OUTspoken’s message was
                two-fold. We sought to create a brand that represented both
                OUTspoken's commitment to amplifying the voices of the ignored
                as well as their commitment to creating safe spaces through
                community.
              </p>
              <p>
                The new identity feels human and inviting, employing a vibrant
                array of colors to catch the eye. In an environment where every
                poster and flyer competes against 30 others, the new identity
                stands out and resonates with the students it represents.
              </p>
            </SectionDescriptionContent>
            <SectionDescriptionList>
              <ColorsList
                colors={
                  "#000000 #252b32 #5a6171 #998fa3 #796efc #752ed1 #ac298c #eb3d7c #ff6b9f #ffffff #ffda34 #ff9d0a #ff6a26 #f2213a #732a36 #402266 #3919df #297ce7 #13a3f6 #d9e4f2 #67d95d #00b754 #007658"
                }
              />
            </SectionDescriptionList>
          </SectionDescription>
          <BusinessCards
            width={5231}
            height={3048}
            src={"/outspoken/business-cards.png"}
            alt={"outspoken business cards"}
          />
          <Gallery
            width={2320}
            height={3191}
            src={"/outspoken/gallery.png"}
            alt={"outspoken branded stickers, lanyards, and info pamphlets."}
          />
        </article>
        <article>
          <SectionCover backgroundColor={"#F12717"}>
            <img src="/pudgies/logo-mono.svg" alt="pudgie's pizzeria" />
          </SectionCover>
          <SectionDescription smallImage>
            <SectionDescriptionTitle size="medium">
              <h3>
                <img src="/pudgies/wordmark.svg" alt="pudgie's" />
              </h3>
            </SectionDescriptionTitle>
            <SectionDescriptionImage>
              <img src="/pudgies/logo-color.svg" alt="pudgie's pizza logo" />
            </SectionDescriptionImage>
            <SectionDescriptionContent>
              <p>
                Pudgie’s Pizzeria is a pizza shop in the heart of Rochester, NY.
                Since 1978, they’ve been serving up delicious pizzas, wings and
                subs to their customers. Unfortunately, their current branding
                is just as old as the restaurant! The goal was to create a fun
                eye-catching new identity to leave customers hungry for more.
              </p>
              <p>
                The new logo turns the P in Pudgie’s into a slice of pizza. It
                works on a variety of backgrounds in various mono and full-color
                versions. The new identity uses bright colors that look so good
                you want to take a bite out of them!
              </p>
            </SectionDescriptionContent>
            <SectionDescriptionList>
              <ColorsList colors={"#000000 #F12717 #FFA600 #ffffff"} />
            </SectionDescriptionList>
          </SectionDescription>
          <BusinessCards
            width={5231}
            height={3048}
            src={"/pudgies/business-cards.png"}
            alt={"pudgie's pizza business cards"}
          />
          <Gallery
            width={2320}
            height={3191}
            src={"/pudgies/gallery.png"}
            alt={"pudgie's pizza takeout menus."}
          />
        </article>
        <article>
          <SectionCover backgroundColor={"#000000"}>
            <img src="/bombing-science/logo-b.svg" alt="bombing science" />
          </SectionCover>
          <SectionDescription bigImage>
            <SectionDescriptionTitle size="medium">
              <h3>Bombing Science</h3>
            </SectionDescriptionTitle>
            <SectionDescriptionImage>
              <img
                src="/bombing-science/logo-cap.svg"
                alt="bombing science logo"
              />
            </SectionDescriptionImage>
            <SectionDescriptionContent>
              <p>
                Bombing Science is an online hub for graffiti culture. Since
                1998, Bombing Science has been the premier source for graffiti
                supplies, forums, and pictures.
              </p>
              <p>
                As a personal project, I’ve designed two logo candidates,
                placing an emphasis on the graffiti culture that Bombing Science
                emerged from.
              </p>
            </SectionDescriptionContent>
            <SectionDescriptionList>
              <ColorsList colors={"#000000 #ffffff"} />
            </SectionDescriptionList>
          </SectionDescription>
          <Gallery
            backgroundColor="black"
            width={2320}
            height={3191}
            src={"/bombing-science/gallery.png"}
            alt={"bombing science branded spray cans and stickers"}
          />
        </article>
      </article>
      {/* web dev */}
      <article>
        <header>
          <h2>
            <StarHeader>
              <BottomHalfHighlight>Web Dev</BottomHalfHighlight>
            </StarHeader>
          </h2>
        </header>
        {/* outspoken web */}
        <article>
          <SectionCover backgroundColor={"#EB3D7C"}>
            <img src="/outspoken/cover-web.svg" alt="outspoken website" />
          </SectionCover>
          <SectionDescription>
            <SectionDescriptionTitle>
              <h3>
                <img src="/outspoken/wordmark.svg" alt="outspoken" />
              </h3>
            </SectionDescriptionTitle>
            <SectionDescriptionImage>
              <img
                src="/outspoken/phone-case.png"
                alt="phones with outspoken stickers"
              />
            </SectionDescriptionImage>
            <SectionDescriptionContent>
              <p>
                OUTspoken provides an array of resources to LGBTQ+ students,
                from supplies to clubs to events to representation. In the
                senate, OUTspoken holds a voting seat in Student Government and
                advocates for the Queer community on campus. On the ground, they
                organize events, distribute supplies, and aid with new and
                existing clubs.
              </p>
              <p>
                The new website needed to be quick to navigate and easy to
                parse. It needed to be welcoming and inviting, showcasing an
                organization of queer students, run by queer students, for queer
                students.
              </p>
              <p>
                The new website uses vibrant colors and a soft, homey design to
                create a warm space for students as they search for what they
                need.
              </p>
            </SectionDescriptionContent>
            <SectionDescriptionList>
              <TechStack technologies={"node react nextjs github figma"} />
            </SectionDescriptionList>
          </SectionDescription>
          <Gallery
            width={2320}
            height={3850}
            src={"/outspoken/gallery-web.png"}
            alt={"phones and laptops displaying pages of the new website."}
          />
        </article>
        {/* rewindle */}
        <article>
          <SectionCover backgroundColor={"#000000"}>
            <img src="/rewindle/cover.svg" alt="rewindle" />
          </SectionCover>
          <SectionDescription bigImage>
            <SectionDescriptionTitle>
              <h3>Rewind.le</h3>
            </SectionDescriptionTitle>
            <SectionDescriptionImage>
              <img src="/rewindle/phone.png" alt="phones showing gameplay" />
            </SectionDescriptionImage>
            <SectionDescriptionContent>
              <p>
                Inspired by games like Wordle and Spotle, Rewind.le creates a
                new game, personalized to your music. By accessing your Last.fm
                data, Rewind.le lets you guess from your top 100 albums,
                unlocking a clue with each guess.
              </p>
              <p>
                The website’s primary colors are green and yellow, corresponding
                to the main colors in Wordle.
              </p>
            </SectionDescriptionContent>
            <SectionDescriptionList>
              <TechStack
                technologies={
                  "node react redis mongodb express lastfm musicbrainz"
                }
              />
            </SectionDescriptionList>
          </SectionDescription>
          <Gallery
            width={2320}
            height={4311}
            src={"/rewindle/gallery.png"}
            alt={"phones displaying different screens and gameplay."}
            backgroundColor="radial-gradient(87.79% 87.79% at 50% 12.21%, #0A1807 5.29%, #0D0C03 80.77%);"
          />
        </article>
      </article>
      <ThankYou />
    </div>
  );
}
