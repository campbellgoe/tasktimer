export default () => (
    <div className="about-paragraphs">
      <p>This app is for designers, freelancers, and other workers who want to track how much time they spend on their work.</p>
      <p>Make a timer for each task in your project, start and stop the timers as you work on each task.</p>
      <p>The stripe at the bottom of each task represents a 25 minute timer.</p>
      <style jsx>{`
        .about-paragraphs {
          padding: 5px 1em;
          border-radius: 0.5em;
        }
        p:first-child {
          margin-top: 5px;
        }
        p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
)
