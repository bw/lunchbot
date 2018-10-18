import React from 'react';
import ReactHelmet from 'react-helmet';
import SeededShuffle from 'seededshuffle';
import '../components/index/index.scss';

const LUNCH_SPOTS = [
  // Sandwich places
  'Crema Cafe (sandwiches)',
  'Flour Bakery (sandwiches)',
  'Tatte Bakery (sandwiches, salads)',
  "Darwin's Ltd (sandwiches)", // Further away

  // Heart of HSQ
  'sweetgreen (salads)',
  "Felipe's (burritos)",
  'Shake Shack (burgers)',
  'Black Sheep Bagel Cafe (bagels)',

  // Smith Center
  'Bon Me (sandwiches)',
  'Saloniki (Greek, pita, salads)',
  'Whole Heart Provisions (veg)',

  'Clover (sandwiches) (veg)',
  'b.good (burgers, bowls, salads)',
  'Pokeworks (poke)',

  // Places people don't seem to like
  // ===================
  // 'Zambrero (burrito bowls)',

  // Places not well-suited for lunch
  // ===================
  // 'OTTO (pizza)',
  // "Pinnochio's (pizza)",
];

const now = new Date();
const startingSeed = Number(
  `${now.getFullYear()}${now.getMonth()}${now.getDate()}`,
).toString(36);

class LunchBot extends React.Component {
  state = {
    seed: this.props.location.search ? this.props.location.search.slice(1) : startingSeed,
    isMoreShown: false,
  };

  onNewSeed = () => {
    const seed = Date.now()
      .toString(36)
      .slice(0, 10);
    this.setState({ seed, isMoreShown: false });
  };

  onShowMore = () => {
    if (!this.state.isMoreShown) this.setState({ isMoreShown: true });
  };

  render() {
    console.log(this.props);
    const { location } = this.props;
    const { seed, isMoreShown } = this.state;

    // Get idempotent link
    const href = location.origin + location.pathname + '?' + seed;

    // Get shuffled list
    const selection = SeededShuffle.shuffle(LUNCH_SPOTS, seed, true);

    // Generate title/meta
    const title = 'The Lunchbot';
    const description = `Answering "where should we eat" in Harvard Square.`;

    return (
      <div className="LunchBot">
        <ReactHelmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </ReactHelmet>
        <h1 className="pageTitle">I am the Lunchbot.</h1>
        <p>
          <span>Reducing the number of choices,</span> <span>one meal at a time.</span>
        </p>
        <hr />
        <h3>May I humbly suggest &mdash;</h3>
        <ul className="placesList">
          {selection.slice(0, isMoreShown ? 3 : 1).map((spot, idx) => (
            <li key={idx}>{spot}</li>
          ))}
        </ul>
        {isMoreShown ? (
          <button key={1} className="btn btn-outline-success" onClick={this.onNewSeed}>
            Give me new options&hellip;
          </button>
        ) : (
          <button key={2} className="btn btn-outline-secondary" onClick={this.onShowMore}>
            I&apos;m not feeling it&hellip;
          </button>
        )}
        {startingSeed !== seed && (
          <div className="idempotent">
            This link gives others your new options:
            <a href={href}>{href}</a>
          </div>
        )}

        <footer>
          {startingSeed === seed && (
            <>
              The Lunchbot makes a new Harvard Square suggestion every day or on demand.
              <br />
            </>
          )}
          A fun little thing by <a href="https://brandon.wang">Brandon Wang</a>.
        </footer>
      </div>
    );
  }
}
export default LunchBot;
