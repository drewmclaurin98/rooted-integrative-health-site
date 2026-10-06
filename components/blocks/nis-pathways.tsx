/**
 * Hero background for Rooted Integrative Health (on the deep-teal hero): the nervous system drawn as a
 * rooted tree in fine line work. A canopy of neural pathways frames the headline,
 * the spine (dots, as in the logo) runs down to a root system below the ground line.
 * Two pathways start disrupted (grey, dashed) and are reconnected; then soft signals
 * travel from the roots to the restored pathways: assess, integrate, restore.
 * The centre is masked so text stays readable. Geometry is generated; animation CSS
 * lives in globals.css (".nis-*"). Reduced motion shows the final, restored state.
 */
const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` })

export function NisPathways({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="nis-top-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.16" stopColor="#fff" />
        </linearGradient>
        <radialGradient id="nis-centre-fade">
          <stop offset="0" stopColor="#000" />
          <stop offset="0.55" stopColor="#000" stopOpacity="0.9" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <mask id="nis-mask">
          <rect width="1200" height="560" fill="url(#nis-top-fade)" />
          <ellipse cx="600" cy="300" rx="400" ry="170" fill="url(#nis-centre-fade)" />
        </mask>
      </defs>
      <g mask="url(#nis-mask)">
        {/* Ground line, spinal cord and roots */}
        <path d="M60 468 H1140" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.26" strokeWidth="1" pathLength={1} />
        <path d="M600 468 C594.3 483.2 602.8 500.2 600.0 514.0" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.42" strokeWidth="2.0" strokeLinecap="round" pathLength={1} />
        <path d="M600.0 514.0 C609.6 525.4 605.9 542.7 612.4 553.8" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.4" strokeLinecap="round" pathLength={1} />
        <path d="M612.4 553.8 C613.8 566.6 629.3 570.4 632.7 580.4" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="1.0" strokeLinecap="round" pathLength={1} />
        <path d="M632.7 580.4 C635.7 588.7 646.7 588.0 650.6 593.9" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.7" strokeLinecap="round" pathLength={1} />
        <path d="M650.6 593.9 C655.1 600.0 664.0 597.2 668.7 601.2" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M650.6 593.9 C651.4 600.4 659.1 602.5 661.0 607.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M632.7 580.4 C638.6 586.7 637.7 596.8 641.9 603.1" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.7" strokeLinecap="round" pathLength={1} />
        <path d="M641.9 603.1 C647.4 605.9 647.1 613.4 651.1 616.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M641.9 603.1 C645.5 608.0 642.5 614.8 644.7 619.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M612.4 553.8 C615.8 566.7 609.1 580.8 610.5 592.4" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="1.0" strokeLinecap="round" pathLength={1} />
        <path d="M610.5 592.4 C616.3 601.1 614.5 613.0 618.5 621.2" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.7" strokeLinecap="round" pathLength={1} />
        <path d="M618.5 621.2 C618.3 628.9 627.3 632.0 628.6 638.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M618.5 621.2 C620.3 626.4 617.5 632.3 618.4 637.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M610.5 592.4 C603.5 597.8 607.0 608.2 602.4 613.8" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.7" strokeLinecap="round" pathLength={1} />
        <path d="M602.4 613.8 C599.6 618.8 601.9 625.1 600.2 629.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M602.4 613.8 C600.8 619.5 594.9 623.2 592.8 628.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M600.0 514.0 C603.5 529.4 587.6 540.5 587.7 553.6" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.4" strokeLinecap="round" pathLength={1} />
        <path d="M587.7 553.6 C579.9 566.2 591.8 580.1 588.0 591.5" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="1.0" strokeLinecap="round" pathLength={1} />
        <path d="M588.0 591.5 C595.6 597.7 590.8 608.9 595.6 615.2" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.7" strokeLinecap="round" pathLength={1} />
        <path d="M595.6 615.2 C595.6 623.0 604.6 626.5 605.9 632.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M595.6 615.2 C598.8 620.0 595.3 626.0 597.0 630.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M588.0 591.5 C589.9 601.6 580.2 609.3 580.0 617.9" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.7" strokeLinecap="round" pathLength={1} />
        <path d="M580.0 617.9 C577.3 624.3 580.3 631.8 578.8 637.6" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M580.0 617.9 C574.6 621.8 574.9 629.8 570.9 633.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M587.7 553.6 C584.2 565.3 571.9 572.6 567.4 582.3" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="1.0" strokeLinecap="round" pathLength={1} />
        <path d="M567.4 582.3 C562.7 591.6 550.4 593.3 545.0 600.3" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.7" strokeLinecap="round" pathLength={1} />
        <path d="M545.0 600.3 C539.5 603.3 538.6 610.7 534.4 614.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M545.0 600.3 C538.6 600.2 534.6 606.8 529.3 607.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.5" strokeLinecap="round" pathLength={1} />
        <path d="M600 468 C597.2 497.1 631.4 509.9 634.7 533.3" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round" pathLength={1} />
        <path d="M634.7 533.3 C650.0 538.7 656.8 556.5 669.1 563.2" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M669.1 563.2 C680.3 563.3 689.4 572.8 699.0 574.3" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M699.0 574.3 C702.3 583.7 714.7 582.9 719.0 589.7" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M719.0 589.7 C726.6 589.0 731.7 596.7 738.0 597.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M719.0 589.7 C719.8 595.8 727.1 597.7 728.8 602.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M669.1 563.2 C670.9 574.8 681.9 582.9 684.9 592.6" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M684.9 592.6 C688.7 601.3 699.0 605.5 703.5 612.5" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M703.5 612.5 C710.9 613.2 714.7 621.3 720.8 623.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M703.5 612.5 C704.2 619.6 711.2 624.4 712.8 630.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M684.9 592.6 C683.5 601.2 690.5 608.9 690.6 616.4" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M690.6 616.4 C690.7 623.1 698.0 626.9 699.2 632.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M690.6 616.4 C692.5 623.0 689.4 630.3 690.3 636.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M634.7 533.3 C632.1 548.2 640.7 563.4 640.1 576.7" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M640.1 576.7 C650.6 583.4 647.8 598.5 655.0 605.8" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M655.0 605.8 C651.8 614.7 660.2 622.6 659.1 630.4" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M659.1 630.4 C664.8 635.3 662.7 644.2 666.6 649.2" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M659.1 630.4 C656.6 635.9 659.7 642.4 658.3 647.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M640.1 576.7 C644.0 590.8 630.4 602.5 631.2 614.8" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M631.2 614.8 C627.0 623.8 634.7 633.1 632.8 641.2" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M632.8 641.2 C632.6 646.6 636.6 651.4 637.1 656.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M632.8 641.2 C627.5 647.0 632.5 655.4 629.4 661.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M631.2 614.8 C623.6 619.9 624.3 631.0 618.9 636.5" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M618.9 636.5 C612.2 638.5 611.9 647.0 607.0 649.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600 468 C599.1 495.2 570.4 510.9 565.3 533.3" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round" pathLength={1} />
        <path d="M565.3 533.3 C568.7 548.7 556.4 562.9 557.0 576.4" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M557.0 576.4 C552.8 587.0 561.5 597.6 559.8 606.9" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M559.8 606.9 C568.2 613.1 564.3 625.3 569.9 631.8" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M569.9 631.8 C571.2 637.0 576.9 640.0 578.7 644.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M569.9 631.8 C573.3 637.3 570.9 644.6 573.0 649.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M559.8 606.9 C561.3 616.4 554.2 625.1 554.2 633.4" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M557.0 576.4 C546.1 582.9 549.8 598.1 542.4 605.2" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M542.4 605.2 C537.1 612.9 540.5 623.5 537.1 630.8" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M537.1 630.8 C534.1 636.6 539.3 642.6 538.0 647.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M537.1 630.8 C537.2 637.3 530.3 641.0 529.3 646.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M542.4 605.2 C538.9 613.6 529.2 617.8 525.1 624.6" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M525.1 624.6 C519.4 628.4 520.9 636.6 517.0 640.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M525.1 624.6 C519.7 625.8 516.4 631.4 511.9 633.2" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M565.3 533.3 C550.3 539.5 545.0 557.9 533.2 565.3" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M533.2 565.3 C521.8 573.3 523.6 590.1 515.5 598.6" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M515.5 598.6 C510.2 605.5 514.8 614.9 511.6 621.5" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M511.6 621.5 C514.9 626.3 511.2 632.3 513.0 636.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M511.6 621.5 C510.9 627.8 505.5 632.8 504.1 638.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M515.5 598.6 C511.1 607.9 499.5 611.4 494.5 618.8" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M494.5 618.8 C488.2 622.1 489.0 630.7 484.6 634.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M494.5 618.8 C488.6 619.0 485.5 625.6 480.7 626.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M533.2 565.3 C519.2 565.2 511.4 580.3 499.9 582.6" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M499.9 582.6 C498.0 591.7 486.3 592.3 483.0 599.1" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M483.0 599.1 C482.1 605.0 476.2 608.8 474.5 613.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M483.0 599.1 C476.3 599.2 472.8 606.6 467.4 607.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600 468 C635.9 473.5 661.5 507.5 691.8 516.8" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round" pathLength={1} />
        <path d="M691.8 516.8 C705.5 530.3 726.4 518.9 739.7 527.0" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M739.7 527.0 C749.5 535.0 763.7 529.1 773.1 534.1" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M773.1 534.1 C783.4 532.4 792.9 540.2 801.9 540.2" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M801.9 540.2 C809.3 537.5 815.3 545.2 821.8 544.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M801.9 540.2 C809.5 539.5 813.4 548.1 819.7 549.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M773.1 534.1 C778.8 540.5 788.8 541.1 794.5 545.9" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M794.5 545.9 C800.2 544.1 804.5 550.3 809.4 549.9" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M794.5 545.9 C800.9 548.8 803.9 556.5 809.1 559.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M739.7 527.0 C753.9 526.7 758.8 543.8 770.0 546.2" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M770.0 546.2 C777.2 554.0 789.1 548.8 796.2 553.7" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M796.2 553.7 C803.6 551.2 809.7 558.6 816.1 557.9" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M796.2 553.7 C802.4 555.1 806.8 561.1 812.0 563.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M770.0 546.2 C778.3 549.3 779.2 559.9 785.4 563.8" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M785.4 563.8 C791.6 564.4 794.6 571.5 799.6 573.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M691.8 516.8 C710.9 523.0 710.5 547.9 724.5 556.4" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M724.5 556.4 C739.4 556.8 745.8 573.9 757.7 576.9" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M757.7 576.9 C766.9 575.9 774.4 584.1 782.4 584.6" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M782.4 584.6 C789.5 583.6 796.1 588.8 802.4 588.9" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M724.5 556.4 C732.8 566.1 731.7 581.0 737.6 590.5" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M737.6 590.5 C739.4 601.1 751.4 605.8 754.7 614.3" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M754.7 614.3 C757.5 619.5 764.3 620.8 767.4 624.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M754.7 614.3 C759.7 618.6 757.5 626.3 760.9 630.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M737.6 590.5 C741.6 598.1 737.8 607.6 740.1 614.6" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M740.1 614.6 C737.4 619.4 739.3 625.5 737.6 629.9" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600 468 C579.8 503.2 530.7 492.7 508.2 516.8" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round" pathLength={1} />
        <path d="M508.2 516.8 C493.7 521.1 492.1 539.6 481.2 545.6" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M481.2 545.6 C471.0 552.3 475.1 566.9 468.2 574.1" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M468.2 574.1 C462.8 582.7 466.8 593.9 463.4 602.0" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M463.4 602.0 C461.1 607.6 466.0 613.1 465.1 618.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M463.4 602.0 C463.7 608.5 456.8 612.3 455.9 617.6" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M468.2 574.1 C459.4 577.5 459.0 589.0 452.5 593.2" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M452.5 593.2 C447.7 597.7 448.6 605.5 445.2 610.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M452.5 593.2 C446.9 594.6 443.7 600.5 439.1 602.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M481.2 545.6 C466.6 544.9 459.7 561.7 447.9 563.7" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M447.9 563.7 C438.0 561.3 430.1 570.9 421.6 570.6" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M421.6 570.6 C415.5 571.0 411.6 577.1 406.5 578.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M421.6 570.6 C414.5 569.1 408.1 574.9 401.8 574.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M508.2 516.8 C491.7 514.1 476.6 526.6 462.1 526.6" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M462.1 526.6 C454.3 538.2 437.6 537.6 429.2 546.1" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M429.2 546.1 C421.0 548.6 419.5 559.0 413.2 562.4" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M413.2 562.4 C412.9 569.0 405.8 572.6 404.5 578.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M413.2 562.4 C406.0 562.8 402.2 570.7 396.3 572.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M429.2 546.1 C420.2 544.8 412.7 552.6 404.9 552.9" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M404.9 552.9 C401.5 558.9 393.0 557.6 389.2 561.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M404.9 552.9 C398.4 550.8 392.9 557.2 387.2 556.6" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M462.1 526.6 C452.5 536.3 437.7 528.0 428.4 533.8" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M428.4 533.8 C423.4 542.4 411.3 539.5 405.8 545.4" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M405.8 545.4 C402.9 551.3 395.6 553.5 392.4 558.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M405.8 545.4 C400.1 551.1 391.3 546.3 385.7 549.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M428.4 533.8 C419.6 532.2 411.6 539.1 404.0 539.0" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M404.0 539.0 C399.7 545.8 390.0 542.9 385.4 547.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M404.0 539.0 C396.9 537.1 390.8 543.5 384.6 543.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600 468 C635.7 490.5 683.7 478.3 717.4 492.9" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round" pathLength={1} />
        <path d="M717.4 492.9 C732.4 489.1 745.5 502.4 758.6 501.7" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M758.6 501.7 C770.1 512.4 787.4 503.7 798.6 510.2" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M798.6 510.2 C806.8 508.1 813.9 515.4 821.0 515.0" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M821.0 515.0 C827.7 512.6 833.1 519.4 838.8 518.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M821.0 515.0 C827.1 514.5 830.8 521.0 835.8 521.7" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M798.6 510.2 C804.1 516.4 813.8 515.9 819.4 520.3" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M819.4 520.3 C824.3 524.0 831.3 521.5 836.0 523.9" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M819.4 520.3 C822.0 525.1 828.3 526.6 831.3 530.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M758.6 501.7 C772.3 503.3 780.3 517.7 791.6 521.1" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M791.6 521.1 C800.6 517.9 807.7 527.6 815.4 526.7" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M815.4 526.7 C822.6 525.4 829.1 531.1 835.4 531.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M791.6 521.1 C795.3 529.9 805.6 534.0 809.9 541.1" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M809.9 541.1 C810.5 547.2 816.9 550.9 818.4 556.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M717.4 492.9 C734.5 498.2 745.7 515.7 760.0 522.3" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M760.0 522.3 C769.1 531.1 783.6 525.7 792.6 531.4" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M792.6 531.4 C801.1 537.5 812.9 533.5 821.0 537.4" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M821.0 537.4 C826.7 541.5 834.6 538.8 840.1 541.5" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M821.0 537.4 C825.0 542.5 832.7 541.5 836.9 545.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M792.6 531.4 C802.8 531.4 806.5 543.6 814.6 545.6" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M814.6 545.6 C821.5 544.0 826.3 551.3 832.2 551.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M814.6 545.6 C816.5 551.8 824.0 553.9 826.5 558.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M760.0 522.3 C764.5 535.6 778.5 543.9 784.0 555.0" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M784.0 555.0 C787.5 563.4 798.6 564.2 802.9 570.5" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M802.9 570.5 C806.5 574.8 813.2 574.2 817.0 577.2" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600 468 C565.7 496.9 515.6 475.1 482.6 492.9" className="stroke-primary-light nis-draw" style={d(0)} strokeOpacity="0.42" strokeWidth="1.5" strokeLinecap="round" pathLength={1} />
        <path d="M482.6 492.9 C467.5 494.3 461.1 511.7 449.0 515.4" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M449.0 515.4 C445.8 528.2 431.4 534.3 426.8 544.7" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M426.8 544.7 C428.5 553.5 419.1 559.4 418.8 566.8" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M418.8 566.8 C422.0 573.4 416.0 580.1 417.4 586.0" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M418.8 566.8 C411.5 569.6 412.7 579.3 407.5 582.9" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M426.8 544.7 C418.8 546.8 414.2 555.4 407.6 558.3" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M407.6 558.3 C400.8 561.4 399.5 570.2 394.3 573.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M407.6 558.3 C402.6 562.5 395.1 562.1 390.2 565.1" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M449.0 515.4 C436.8 514.7 425.7 523.5 415.0 524.3" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M415.0 524.3 C406.7 524.5 402.2 533.5 395.4 535.1" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M395.4 535.1 C390.0 537.2 387.3 543.4 382.9 545.9" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M395.4 535.1 C389.0 534.8 383.4 539.8 377.8 540.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M415.0 524.3 C407.4 530.8 396.3 525.9 388.9 529.8" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M388.9 529.8 C382.7 530.8 378.0 536.3 372.7 537.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M388.9 529.8 C383.6 533.9 376.1 531.1 371.1 533.6" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M482.6 492.9 C464.1 489.4 447.3 504.2 431.1 503.9" className="stroke-primary-light nis-draw" style={d(160)} strokeOpacity="0.37" strokeWidth="1.1" strokeLinecap="round" pathLength={1} />
        <path d="M431.1 503.9 C418.0 506.5 408.8 519.2 397.7 523.1" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M397.7 523.1 C387.1 526.3 384.4 539.3 376.2 543.7" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M376.2 543.7 C375.4 549.5 369.4 553.0 367.9 557.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M376.2 543.7 C368.2 543.2 364.5 552.5 358.1 553.6" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M397.7 523.1 C387.7 520.3 380.4 530.7 372.0 530.3" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M372.0 530.3 C365.1 530.0 361.8 537.8 356.2 538.8" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M372.0 530.3 C364.9 527.6 359.3 535.1 353.2 534.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M431.1 503.9 C419.4 512.2 403.2 506.9 392.1 512.2" className="stroke-primary-light nis-draw" style={d(320)} strokeOpacity="0.31" strokeWidth="0.8" strokeLinecap="round" pathLength={1} />
        <path d="M392.1 512.2 C382.0 513.8 374.6 523.3 366.0 525.9" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M366.0 525.9 C363.8 532.3 355.5 532.4 352.6 537.2" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M366.0 525.9 C358.9 525.2 352.9 531.0 346.8 531.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M392.1 512.2 C383.7 510.2 376.3 517.5 368.9 517.1" className="stroke-primary-light nis-draw" style={d(480)} strokeOpacity="0.26" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M368.9 517.1 C364.4 522.5 356.2 522.3 351.6 526.3" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M368.9 517.1 C361.6 515.3 355.2 521.7 348.9 521.4" className="stroke-primary-light nis-draw" style={d(640)} strokeOpacity="0.21" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600 468 V292" className="stroke-primary-light nis-draw" style={d(500)} strokeOpacity="0.3" strokeWidth="2" pathLength={1} />

        {/* Canopy: neural pathways */}
        <path d="M600 292 C594.1 278.8 603.0 264.0 600.0 252.0" className="stroke-primary-light nis-draw" style={d(900)} strokeOpacity="0.64" strokeWidth="3.2" strokeLinecap="round" pathLength={1} />
        <path d="M600.0 252.0 C651.3 261.2 698.2 221.1 743.2 221.6" className="stroke-primary-light nis-draw" style={d(1070)} strokeOpacity="0.58" strokeWidth="2.3" strokeLinecap="round" pathLength={1} />
        <path d="M743.2 221.6 C768.2 198.2 805.8 217.3 830.1 203.1" className="stroke-primary-light nis-draw" style={d(1240)} strokeOpacity="0.52" strokeWidth="1.7" strokeLinecap="round" pathLength={1} />
        <path d="M830.1 203.1 C852.8 205.1 874.7 190.2 894.8 189.3" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M894.8 189.3 C905.1 171.9 929.6 173.0 941.0 160.4" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M941.0 160.4 C954.5 162.7 965.8 150.7 977.5 150.6" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M977.5 150.6 C983.4 145.9 991.8 149.2 997.5 146.3" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M977.5 150.6 C981.5 143.4 991.5 144.2 996.0 139.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M941.0 160.4 C943.7 147.7 959.2 144.2 963.5 134.3" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M963.5 134.3 C967.2 126.2 978.2 127.7 982.6 121.9" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M963.5 134.3 C964.1 126.3 971.5 120.5 973.1 113.7" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M830.1 203.1 C843.7 186.1 868.4 180.9 882.3 167.6" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M882.3 167.6 C896.7 152.8 920.2 162.5 934.5 153.2" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M934.5 153.2 C946.3 157.2 956.0 145.4 966.2 146.4" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M966.2 146.4 C973.5 139.8 984.3 145.1 991.4 141.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M966.2 146.4 C972.1 139.3 983.1 140.5 989.1 135.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M934.5 153.2 C947.6 151.0 955.4 137.2 966.2 133.5" className="stroke-gray-500" strokeWidth="0.6" strokeDasharray="2 4" strokeLinecap="round" />
        <path d="M934.5 153.2 C947.6 151.0 955.4 137.2 966.2 133.5" className="stroke-primary-light nis-draw nis-restore" style={d(3500)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M966.2 133.5 C971.9 126.8 982.0 130.6 987.7 126.3" className="stroke-gray-500" strokeWidth="0.4" strokeDasharray="2 4" strokeLinecap="round" />
        <path d="M966.2 133.5 C971.9 126.8 982.0 130.6 987.7 126.3" className="stroke-primary-light nis-draw nis-restore" style={d(3500)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M966.2 133.5 C968.7 125.9 978.2 124.1 981.5 118.2" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M882.3 167.6 C897.4 160.2 898.2 139.9 909.4 131.3" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M909.4 131.3 C914.0 117.6 931.9 118.7 938.1 108.9" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M938.1 108.9 C944.1 103.5 953.4 103.6 959.3 99.6" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M938.1 108.9 C940.5 101.5 948.5 97.3 951.5 91.3" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M909.4 131.3 C917.1 123.5 915.4 110.7 920.7 103.1" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M920.7 103.1 C921.4 93.9 932.2 90.6 934.4 83.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M743.2 221.6 C777.9 210.3 799.4 173.8 828.2 159.8" className="stroke-primary-light nis-draw" style={d(1240)} strokeOpacity="0.52" strokeWidth="1.7" strokeLinecap="round" pathLength={1} />
        <path d="M828.2 159.8 C847.8 146.8 874.9 151.0 893.6 142.0" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M893.6 142.0 C905.9 133.2 923.1 138.9 934.9 133.3" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M934.9 133.3 C947.6 138.2 957.8 124.6 968.7 126.1" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M968.7 126.1 C974.5 122.4 982.4 124.4 987.9 122.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M968.7 126.1 C973.8 120.5 982.7 121.1 987.8 117.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M934.9 133.3 C941.8 126.0 953.3 125.0 960.2 119.6" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M960.2 119.6 C966.0 115.5 974.2 117.0 979.8 114.3" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M960.2 119.6 C967.8 116.8 970.9 107.8 977.0 104.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M893.6 142.0 C911.3 139.6 920.3 120.3 934.7 115.5" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M934.7 115.5 C947.7 119.7 957.0 105.3 968.0 106.1" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M968.0 106.1 C976.5 107.7 984.2 101.0 991.6 101.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M968.0 106.1 C973.3 98.7 984.1 99.4 989.7 94.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M934.7 115.5 C938.3 105.9 949.2 100.7 953.5 92.8" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M953.5 92.8 C953.4 85.3 961.4 80.9 962.5 74.6" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M828.2 159.8 C846.4 147.9 847.8 121.9 861.4 109.1" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M861.4 109.1 C880.6 107.0 885.4 83.6 900.2 78.4" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M900.2 78.4 C912.4 78.6 922.4 68.4 932.9 66.9" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M932.9 66.9 C938.9 63.5 946.8 65.1 952.4 62.8" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M932.9 66.9 C941.8 66.3 945.7 56.2 952.8 54.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M861.4 109.1 C857.2 91.9 874.0 78.3 873.5 63.6" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M873.5 63.6 C874.4 50.2 889.6 44.1 892.7 33.4" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M892.7 33.4 C895.5 23.6 908.1 22.8 912.1 15.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M892.7 33.4 C898.7 28.0 895.2 18.7 899.1 13.3" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M873.5 63.6 C867.0 52.6 875.3 39.5 871.8 29.4" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M871.8 29.4 C868.6 20.0 878.3 12.5 877.5 4.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M871.8 29.4 C873.1 20.5 864.5 13.8 864.1 6.3" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600.0 252.0 C609.7 229.0 600.1 201.6 605.8 180.4" className="stroke-primary-light nis-draw" style={d(1070)} strokeOpacity="0.58" strokeWidth="2.3" strokeLinecap="round" pathLength={1} />
        <path d="M605.8 180.4 C601.2 141.4 646.2 122.2 649.9 90.5" className="stroke-primary-light nis-draw" style={d(1240)} strokeOpacity="0.52" strokeWidth="1.7" strokeLinecap="round" pathLength={1} />
        <path d="M649.9 90.5 C668.6 83.1 678.9 62.0 694.2 53.2" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M694.2 53.2 C711.9 53.2 724.3 36.2 739.2 33.6" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M739.2 33.6 C749.0 25.9 763.0 31.4 772.4 26.6" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M772.4 26.6 C780.1 29.6 786.3 21.3 792.9 22.2" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M772.4 26.6 C780.5 26.9 784.7 17.7 791.4 16.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M739.2 33.6 C750.8 32.1 753.7 18.0 762.7 14.7" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M762.7 14.7 C771.6 15.7 776.1 5.5 783.3 4.7" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M762.7 14.7 C765.1 6.5 774.2 2.4 777.4 -4.2" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M694.2 53.2 C709.3 41.3 712.9 19.3 724.5 7.1" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M724.5 7.1 C731.2 -3.9 745.6 -8.1 752.7 -16.8" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M752.7 -16.8 C761.6 -17.0 766.9 -26.3 774.2 -27.8" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M752.7 -16.8 C759.5 -20.3 760.0 -29.5 765.1 -33.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M724.5 7.1 C722.4 -4.7 733.6 -13.9 733.9 -24.0" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M733.9 -24.0 C742.1 -27.6 740.7 -38.7 746.6 -43.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M733.9 -24.0 C730.7 -30.9 735.4 -38.7 733.9 -45.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M649.9 90.5 C658.8 69.0 647.9 43.9 652.7 24.2" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M652.7 24.2 C653.8 8.1 667.3 -4.8 670.2 -18.6" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M670.2 -18.6 C673.3 -30.8 687.4 -36.1 691.8 -46.0" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M691.8 -46.0 C698.7 -47.9 702.5 -55.3 708.1 -57.9" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M691.8 -46.0 C691.7 -53.4 698.8 -58.7 699.9 -65.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M652.7 24.2 C642.7 9.7 644.6 -10.6 637.5 -24.4" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M637.5 -24.4 C632.8 -34.4 640.0 -45.4 637.7 -54.4" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M637.7 -54.4 C636.9 -62.8 643.5 -70.2 644.0 -77.6" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M637.7 -54.4 C630.8 -60.9 635.8 -71.6 631.5 -78.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M605.8 180.4 C580.2 159.2 597.4 121.4 581.3 99.9" className="stroke-primary-light nis-draw" style={d(1240)} strokeOpacity="0.52" strokeWidth="1.7" strokeLinecap="round" pathLength={1} />
        <path d="M581.3 99.9 C594.3 76.7 577.3 49.5 584.2 28.2" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M584.2 28.2 C595.0 15.2 592.4 -4.5 599.9 -17.2" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M599.9 -17.2 C610.7 -22.3 610.7 -36.9 618.7 -43.0" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M618.7 -43.0 C622.2 -51.4 633.3 -51.5 637.6 -57.7" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M618.7 -43.0 C624.2 -48.7 622.5 -57.9 626.2 -63.6" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M599.9 -17.2 C604.4 -28.4 598.7 -41.4 601.1 -51.6" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M601.1 -51.6 C598.9 -60.0 607.4 -66.3 607.1 -73.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M601.1 -51.6 C602.8 -60.4 595.9 -68.6 596.1 -76.3" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M584.2 28.2 C587.9 11.4 572.4 -2.4 572.7 -16.9" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M572.7 -16.9 C579.4 -29.2 569.6 -43.1 573.1 -54.3" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M573.1 -54.3 C570.8 -62.3 579.5 -67.7 579.2 -74.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M573.1 -54.3 C574.4 -61.9 567.5 -68.0 567.4 -74.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M572.7 -16.9 C572.3 -29.2 558.9 -35.6 556.5 -45.6" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M556.5 -45.6 C551.5 -51.4 554.7 -60.1 551.4 -65.7" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M556.5 -45.6 C553.2 -53.2 544.1 -56.3 540.2 -62.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M581.3 99.9 C563.6 88.6 559.8 64.2 546.2 52.1" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M546.2 52.1 C538.4 39.9 540.7 23.4 535.3 11.9" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M535.3 11.9 C531.5 2.2 538.2 -8.3 536.5 -17.1" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M536.5 -17.1 C541.6 -22.5 539.6 -31.2 543.0 -36.6" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M536.5 -17.1 C537.7 -24.8 531.3 -31.5 531.2 -38.2" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M535.3 11.9 C525.4 7.1 526.9 -6.5 519.9 -12.1" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M519.9 -12.1 C521.1 -20.9 512.7 -27.5 512.3 -35.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M519.9 -12.1 C512.6 -15.4 509.1 -24.0 503.2 -27.7" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M546.2 52.1 C537.9 34.2 513.6 37.3 503.7 24.7" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M503.7 24.7 C492.8 20.8 492.7 6.6 484.7 1.6" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M484.7 1.6 C476.9 -3.8 479.2 -15.2 473.8 -20.9" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M484.7 1.6 C475.6 0.3 472.5 -10.4 465.3 -12.9" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M600.0 252.0 C548.9 262.1 502.9 220.9 458.2 221.9" className="stroke-primary-light nis-draw" style={d(1070)} strokeOpacity="0.58" strokeWidth="2.3" strokeLinecap="round" pathLength={1} />
        <path d="M458.2 221.9 C415.5 221.7 400.3 170.8 366.6 162.8" className="stroke-primary-light nis-draw" style={d(1240)} strokeOpacity="0.52" strokeWidth="1.7" strokeLinecap="round" pathLength={1} />
        <path d="M366.6 162.8 C360.7 140.1 335.5 128.8 327.3 110.4" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M327.3 110.4 C327.2 94.9 315.5 81.2 313.7 67.7" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M313.7 67.7 C310.8 57.4 315.8 46.1 314.5 36.8" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M314.5 36.8 C314.1 27.7 321.3 20.0 322.1 12.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M314.5 36.8 C315.1 28.7 309.3 21.2 308.8 14.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M313.7 67.7 C312.9 56.3 298.9 53.2 296.1 44.3" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M296.1 44.3 C288.5 38.7 291.1 27.3 285.9 21.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M296.1 44.3 C293.2 35.7 282.0 35.3 278.0 29.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M327.3 110.4 C318.3 98.8 301.5 95.9 292.3 87.0" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M292.3 87.0 C290.8 73.0 273.8 69.2 270.1 58.4" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M270.1 58.4 C271.0 49.3 261.3 43.9 260.4 36.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M270.1 58.4 C266.6 49.6 255.0 49.4 250.6 42.9" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M292.3 87.0 C282.6 80.8 269.4 82.4 260.3 78.1" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M260.3 78.1 C255.9 71.0 245.8 72.1 241.0 67.1" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M260.3 78.1 C252.4 79.2 245.0 73.5 238.1 73.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M366.6 162.8 C346.2 166.3 327.9 150.1 310.1 150.2" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M310.1 150.2 C301.5 137.7 283.7 136.3 274.7 126.9" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M274.7 126.9 C265.3 120.6 261.8 108.0 254.3 101.4" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M254.3 101.4 C254.3 91.9 244.7 85.9 243.1 78.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M254.3 101.4 C249.8 93.4 239.1 91.7 234.1 85.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M274.7 126.9 C261.3 130.7 251.4 116.7 240.0 117.3" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M240.0 117.3 C232.2 117.6 229.1 108.5 223.0 107.2" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M240.0 117.3 C231.8 120.6 225.2 111.7 218.2 112.7" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M458.2 221.9 C420.4 235.7 389.8 196.4 357.3 200.4" className="stroke-primary-light nis-draw" style={d(1240)} strokeOpacity="0.52" strokeWidth="1.7" strokeLinecap="round" pathLength={1} />
        <path d="M357.3 200.4 C347.6 179.7 319.5 182.7 308.0 168.0" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M308.0 168.0 C294.6 158.7 291.3 140.0 281.0 130.3" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M281.0 130.3 C268.9 126.7 262.3 113.6 252.5 108.9" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M252.5 108.9 C250.6 102.0 242.6 98.9 240.0 93.4" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M252.5 108.9 C244.9 108.5 238.9 101.9 232.3 100.6" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M357.3 200.4 C332.8 203.6 309.9 186.1 288.3 185.8" className="stroke-primary-light nis-draw" style={d(1410)} strokeOpacity="0.46" strokeWidth="1.2" strokeLinecap="round" pathLength={1} />
        <path d="M288.3 185.8 C271.0 183.2 261.3 164.7 247.1 159.9" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M247.1 159.9 C245.5 149.1 232.3 146.4 229.1 138.1" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M229.1 138.1 C222.0 132.2 222.6 121.1 217.5 115.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M229.1 138.1 C220.8 137.1 218.3 127.1 211.8 124.8" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M247.1 159.9 C236.1 162.5 227.0 152.2 217.5 152.6" className="stroke-gray-500" strokeWidth="0.6" strokeDasharray="2 4" strokeLinecap="round" />
        <path d="M247.1 159.9 C236.1 162.5 227.0 152.2 217.5 152.6" className="stroke-primary-light nis-draw nis-restore" style={d(3000)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M217.5 152.6 C210.6 151.2 205.9 144.5 200.1 142.5" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M217.5 152.6 C210.9 146.2 200.9 151.6 194.5 147.7" className="stroke-gray-500" strokeWidth="0.4" strokeDasharray="2 4" strokeLinecap="round" />
        <path d="M217.5 152.6 C210.9 146.2 200.9 151.6 194.5 147.7" className="stroke-primary-light nis-draw nis-restore" style={d(3000)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M288.3 185.8 C276.1 174.6 257.8 183.5 246.0 176.8" className="stroke-primary-light nis-draw" style={d(1580)} strokeOpacity="0.4" strokeWidth="0.9" strokeLinecap="round" pathLength={1} />
        <path d="M246.0 176.8 C233.3 176.9 225.9 163.5 215.4 161.5" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M215.4 161.5 C212.9 153.0 201.8 152.9 198.2 146.6" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M215.4 161.5 C208.3 162.8 201.9 157.2 195.6 157.2" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M246.0 176.8 C233.8 178.5 222.5 169.6 211.8 169.5" className="stroke-primary-light nis-draw" style={d(1750)} strokeOpacity="0.34" strokeWidth="0.6" strokeLinecap="round" pathLength={1} />
        <path d="M211.8 169.5 C206.4 164.2 197.7 164.0 192.4 160.0" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />
        <path d="M211.8 169.5 C202.4 173.1 194.9 163.1 186.8 164.2" className="stroke-primary-light nis-draw" style={d(1920)} strokeOpacity="0.28" strokeWidth="0.4" strokeLinecap="round" pathLength={1} />

        {/* Synapses at the branch tips */}
        <circle cx="997.5" cy="146.3" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="973.1" cy="113.7" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="991.4" cy="141.1" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="987.7" cy="126.3" r="7" className="fill-warning/30 nis-glow" style={d(4200)} />
        <circle cx="987.7" cy="126.3" r="2.2" className="fill-primary-light nis-node" style={d(4200)} />
        <circle cx="981.5" cy="118.2" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="951.5" cy="91.3" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="934.4" cy="83.4" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="987.8" cy="117.1" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="979.8" cy="114.3" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="991.6" cy="101.1" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="952.8" cy="54.1" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="899.1" cy="13.3" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="877.5" cy="4.5" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="791.4" cy="16.5" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="783.3" cy="4.7" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="774.2" cy="-27.8" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="733.9" cy="-45.0" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="708.1" cy="-57.9" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="644.0" cy="-77.6" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="637.6" cy="-57.7" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="596.1" cy="-76.3" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="567.4" cy="-74.5" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="551.4" cy="-65.7" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="531.2" cy="-38.2" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="512.3" cy="-35.0" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="473.8" cy="-20.9" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="308.8" cy="14.1" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="285.9" cy="21.4" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="260.4" cy="36.5" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="238.1" cy="73.4" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="243.1" cy="78.0" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="218.2" cy="112.7" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="232.3" cy="100.6" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="217.5" cy="115.0" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="194.5" cy="147.7" r="7" className="fill-warning/30 nis-glow" style={d(3700)} />
        <circle cx="194.5" cy="147.7" r="2.2" className="fill-primary-light nis-node" style={d(3700)} />
        <circle cx="195.6" cy="157.2" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />
        <circle cx="192.4" cy="160.0" r="1.6" className="fill-primary-light nis-node" style={d(2420)} fillOpacity="0.55" />

        {/* Spine (vertebrae, as in the logo) */}
        <circle cx="600.0" cy="452.0" r="5.0" className="fill-[#263D42] stroke-primary-light nis-node" style={d(600)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="602.7" cy="434.0" r="6.5" className="fill-[#263D42] stroke-primary-light nis-node" style={d(680)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="604.9" cy="416.0" r="7.8" className="fill-[#263D42] stroke-primary-light nis-node" style={d(760)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="606.5" cy="398.0" r="8.7" className="fill-[#263D42] stroke-primary-light nis-node" style={d(840)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="607.0" cy="380.0" r="9.0" className="fill-[#263D42] stroke-primary-light nis-node" style={d(920)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="606.5" cy="362.0" r="8.7" className="fill-[#263D42] stroke-primary-light nis-node" style={d(1000)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="604.9" cy="344.0" r="7.8" className="fill-[#263D42] stroke-primary-light nis-node" style={d(1080)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="602.7" cy="326.0" r="6.5" className="fill-[#263D42] stroke-primary-light nis-node" style={d(1160)} strokeOpacity="0.47" strokeWidth="1.4" />
        <circle cx="600.0" cy="308.0" r="5.0" className="fill-[#263D42] stroke-primary-light nis-node" style={d(1240)} strokeOpacity="0.47" strokeWidth="1.4" />

        {/* Signals travelling from the roots to the restored pathways */}
        <g className="nis-pulse" opacity="0">
          <circle r="6" className="fill-warning/25" />
          <circle r="2.4" className="fill-warning" />
          <animateMotion dur="7s" begin="4.2s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;0.6;1" keySplines="0.45 0 0.25 1;0 0 1 1" path="M508.2 516.8 C530.7 492.7 579.8 503.2 600 468 L600 292 278.8 603.0 264.0 600.0 252.0 262.1 502.9 220.9 458.2 221.9 235.7 389.8 196.4 357.3 200.4 203.6 309.9 186.1 288.3 185.8 183.2 261.3 164.7 247.1 159.9 162.5 227.0 152.2 217.5 152.6 146.2 200.9 151.6 194.5 147.7" />
          <animate attributeName="opacity" dur="7s" begin="4.2s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.06;0.54;0.6;1" />
        </g>
        <g className="nis-pulse" opacity="0">
          <circle r="6" className="fill-warning/25" />
          <circle r="2.4" className="fill-warning" />
          <animateMotion dur="8s" begin="5.4s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;0.6;1" keySplines="0.45 0 0.25 1;0 0 1 1" path="M691.8 516.8 C661.5 507.5 635.9 473.5 600 468 L600 292 278.8 603.0 264.0 600.0 252.0 261.2 698.2 221.1 743.2 221.6 198.2 805.8 217.3 830.1 203.1 186.1 868.4 180.9 882.3 167.6 152.8 920.2 162.5 934.5 153.2 151.0 955.4 137.2 966.2 133.5 126.8 982.0 130.6 987.7 126.3" />
          <animate attributeName="opacity" dur="8s" begin="5.4s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.06;0.54;0.6;1" />
        </g>
        <g className="nis-pulse" opacity="0">
          <circle r="6" className="fill-warning/25" />
          <circle r="2.4" className="fill-warning" />
          <animateMotion dur="9s" begin="7s" repeatCount="indefinite" calcMode="spline" keyPoints="0;1;1" keyTimes="0;0.6;1" keySplines="0.45 0 0.25 1;0 0 1 1" path="M600 468 L600 292 278.8 603.0 264.0 600.0 252.0 229.0 600.1 201.6 605.8 180.4 159.2 597.4 121.4 581.3 99.9 76.7 577.3 49.5 584.2 28.2 15.2 592.4 -4.5 599.9 -17.2 -22.3 610.7 -36.9 618.7 -43.0 -51.4 633.3 -51.5 637.6 -57.7" />
          <animate attributeName="opacity" dur="9s" begin="7s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.06;0.54;0.6;1" />
        </g>
      </g>
    </svg>
  )
}
