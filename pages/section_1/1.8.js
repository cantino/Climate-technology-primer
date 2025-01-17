import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Nav from '../../components/nav'
import sidebar from '../../components/sidebar'
import Collapsible from 'react-collapsible';
import Latex from 'react-latex-next'
import Script from 'next/script'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
      <script src="https://unpkg.com/@curvenote/article"></script>

        <Nav></Nav>
        <div>
          <article>
          <section >
            <h1 >1.8: Variable renewables</h1>
            <p>
                Subsidies have helped drive down the cost of wind and solar energy <a href="https://twitter.com/ramez/status/1113073180040663040?lang=en">to the point where they are cost-competitive with fossil fuels</a>  (in some settings and up to some level of scale) 
                — this is fantastic, as it means everyone, no matter how self-interested they are, now has the incentive to massively build these system out. 
                As I mentioned in the disclaimers, deploying existing technology now is important as there is a tightly limited feasible carbon budget in the coming few decades and we can’t afford to wait to curb emissions if we want to limit the peak CO2 concentration reached.
                <br></br><br></br>
                <label for="mn-demo" class="margin-toggle">&#8853;</label>
                <input type="checkbox" id="mn-demo" class="margin-toggle"/>
                <span class="marginnote" id="id_option">
                You can find more studies <a href="https://en.wikipedia.org/wiki/Cost_of_electricity_by_source#Current_global_studies">here</a>.
                </span> 

                <a href="https://twitter.com/ramez/status/1182212671581503493">Arguably</a>, the scenarios in integrated assessment models may not be sufficiently accounting for how fast prices can drop as technologies like solar get deployed at larger scales. Here is a <a href="https://www.forbes.com/sites/energyinnovation/2018/12/03/plunging-prices-mean-building-new-renewable-energy-is-cheaper-than-running-existing-coal/">nice article</a> from Megan Mahajan on the plunging price of renewables, building on <a href="https://www.lazard.com/perspective/levelized-cost-of-energy-2017/">studies by Lazard</a> which also had the following figure
                <br></br><br></br>
                <div style={{textAlign: 'center'}}>
                <Image src='/img/sec1/1_levelised_cost.png' alt="levelised cost graph" width="500px" height="400px"/>
                </div>
                <br></br><br></br>
                Overall, though, variable renewables like wind and solar are still a small fraction of overall power generation. While subsidies for renewables have allowed scaling up of deployment and thus <a href="https://www.bloomberg.com/news/features/2019-09-19/solar-and-wind-power-so-cheap-they-re-outgrowing-subsidies">driven</a> <a href="https://twitter.com/ramez/status/1094132711126487040">down</a> their un-subsidized costs, there remain real obstacles to scaling them to the level of the entire power grid. 
                <br></br><br></br>
                Even if we had much more low-cost renewables available, their intermittent and variable nature makes them difficult to 
                integrate into the existing power grid, beyond a certain fractional level, without some form of stabilization. This could
                 include large-scale storage, improved transmission systems that allow <a href="https://www.researchgate.net/profile/Bri-Mathias_Hodge/publication/314198578_Achieving_a_100_Renewable_Grid_Operating_Electric_Power_Systems_with_Extremely_High_Levels_of_Variable_Renewable_Energy/links/59e9018faca272bc425f54f3/Achieving-a-100-Renewable-Grid-Operating-Electric-Power-Systems-with-Extremely-High-Levels-of-Variable-Renewable-Energy.pdf">balancing</a> the 
                 grid through integration of more 
                 geographically diverse and hence uncorrelated sources, e.g., via the technology of <a href="https://en.wikipedia.org/wiki/High-voltage_direct_current">“high voltage direct current” </a>
                 transmission), flexible long-distance digital control of certain loads, as well as novel distributed control strategies.
                 <br></br><br></br>
                 In a system nearing 100% variable renewable energy without storage, the control architecture of the power grid has to change, because existing control strategies rely heavily on the mechanical inertia of the large spinning turbines in conventional power plants — the current small percentage of variable renewables in the grid is able to integrate by following the patterns established by these large non-variable sources, and by being smoothed out by conventional fossil fuel sources. 
                 <br></br><br></br>
                 The Stanford roadmap makes reference to a separate <a href="https://www.pnas.org/content/112/49/15060">study</a> where they did detailed simulations of variability based on weather, and incorporated the use of various existing storage technologies to allow grid integration. A <a href="https://www.pnas.org/content/114/26/6722">paper was published</a> in PNAS, however, questioning their assumptions and arguing:           
                 <label for="mn-demo" class="margin-toggle">&#8853;</label>
                <input type="checkbox" id="mn-demo" class="margin-toggle"/>
                <span class="marginnote" id="id_option">
                The post from Uhlik in the nuclear section on thorium reactors also contains a quantitative <a href="https://atomicinsights.com/thorium-2/">critique</a> of the assumptions of the Jacobson wind-water-solar roadmap.
                <br></br><br></br>
                I would be remiss not to mention the Stanford group’s <a href="https://www.pnas.org/content/114/26/E5021">reply</a> which among other things states: “Clack et al. (1) assert that underground thermal energy storage (UTES) can’t be expanded nationally, but we disagree. UTES is a form of district heating, which is already used worldwide (e.g., 60% of Denmark); UTES is technologically mature and inexpensive; moreover, hot-water storage or heat pumps can substitute for UTES. Similarly, molten salt can substitute for phase change materials in CSP storage.”

                </span> 

            </p>
            <blockquote>
				<p>
                The study… assumes a total of 2,604 GW of storage charging capacity, more than double the entire current capacity of all power plants in the United States… <b>The energy storage capacity consists almost entirely of two technologies that remain unproven at any scale: 514.6 TWh of UTES</b> [​​Underground Thermal Energy Storage] (the largest UTES facility today is 0.0041 TWh)...
                and 13.26 TWh of phase change materials (PCMs; effectively in research and demonstration phase) … coupled to concentrating solar thermal power (CSP). To give an idea of scale, the 100% wind, solar, and hydroelectric power system proposed in ref. 11 envisions UTES systems deployed in nearly every community for nearly every home, business, office building, hospital, school, and factory in the United States, although only a handful exist today…”

				</p>
			</blockquote>

            <p>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            However, the paper just mentioned also pointed out that, if you only need to be 95% based on variable renewables, then the storage cost target is significantly less stringent.
			</span> 

            How much storage does one really need to go fully to variable renewables, and what would the cost of storage have to be for this to be possible? <a href="https://www.cell.com/joule/fulltext/S2542-4351(19)30300-9">This paper</a> says the cost of storage would have to go to about $20/kWh for a cost-competitive 100% variable renewables grid. Meanwhile, lithium ion batteries currently cost around $140/kWh, but are <a href="https://about.bnef.com/blog/behind-scenes-take-lithium-ion-battery-prices/">projected</a> to reach $60/kWh by 2030: see projection from Ramez Naam below. That seems fairly optimistic for the medium term.
            <br></br><br></br>
            <div style={{textAlign: 'center'}}>
        <Image src='/img/sec1/1_cost_curves.jpeg' alt="energy cost curve graph" width="500px" height="400px"/>
        </div>
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Ramez Naam gives some explanation <a href="http://rameznaam.com/2016/01/31/how-far-can-renewables-go-pretty-darn-far/">here</a> and <a href="http://rameznaam.com/2015/10/14/how-cheap-can-energy-storage-get/">here</a>.
			</span> 

            Can we ballpark why these kinds of optimistic numbers could make some intuitive sense?
            Building on Naam and MacKay: Suppose your lithium ion battery costs $100 per kWh of capacity (which will be true in a few years) and can be charged/discharged 1000 times. That’s 10 cents to charge/discharge a kWh of battery each time — you can see that’s the range in the middle of Ramez Naam’s curve above. Now, that’s comparable to the raw electricity cost, so if you needed to be constantly charging and discharging the battery to supply every kWh of electricity that you use, you’d be doubling your energy cost. But ideally you only need to use the battery infrequently. Let’s say that a person in a rich country needs to be able to store 20 kWh
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            a Tesla car battery is ~60-80 kWh
			</span> 

            per person over periods on the order of 5 days
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            This last number is <a href="https://www.withouthotair.com/c26/page_189.shtml">from</a> MacKay for the case of wind power in England
			</span> 

            Your 20 kWh charge/discharge costs $2, and let’s say you have to do this once a week. That’s $104 dollars a year on your energy bill due to the battery, likely only a fraction of your total electricity cost if you’re in a rich country.
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Another cool possibility is <a href="https://www.cell.com/joule/pdfExtended/S2542-4351(20)30235-X">extraction of lithium from seawater</a>.
			</span> 

            Still, that’s a <a href="http://large.stanford.edu/courses/2010/ph240/eason2/">lot</a> of batteries. Eventually, it seems limited world lithium reserves will become a <a href="https://www.greentechmedia.com/articles/read/is-there-enough-lithium-to-maintain-the-growth-of-the-lithium-ion-battery-m">problem</a>. But of course, there may be other ways to make batteries based on <a href="https://www.technologyreview.com/s/614467/how-a-new-class-of-startups-are-working-to-solve-the-grid-storage-puzzle/">other</a> materials, and new forms of storage, that can kick in by then.
            <br></br><br></br>
            <Collapsible trigger="More on other grid-scale storage technologies">
			<p>
            Ideally these should be much more cost effective than batteries (even after a lot of learning curve progress) for storing very large loads, e.g., much more than a few hours of a significant fraction of the grid’s output:
            <br></br><br></br>
            <b>Compressed air energy storage</b> has some very appealing features, e.g., it can be very large-scale, and doesn’t require any exotic materials like lithium. Here is the basic issue. When you compress air quickly, you heat it. This heat has to go somewhere and then has to be recovered. Otherwise you have thermal losses. Ideally, you’d be able to do isothermal compression and expansion, shuttling heat slowly to and from the environment at a constant temperature with no energy permanently lost in doing so — any heat you give off, you get back for free. Unfortunately this is not easy to do for compressed air energy storage, e.g., you have to compress a lot of air to a high pressure quickly, and this is hard to do while maintaining a constant temperature and fast thermal contact with the outside world. 
            <br></br><br></br>
            Innovative but now sadly defunct company LightSail tried to deal with this through a “quasi-isothermal” process in which water vapor was injected into the compressing air to absorb the heat and then release it back during expansion — because water has a very high specific heat, it can absorb a lot of heat with minimal change in temperature. Fortunately, there <a href="https://pdfs.semanticscholar.org/60b3/c29eaada039d0ee12cd9f987c18d97d531f6.pdf">are</a> <a href="https://pdfs.semanticscholar.org/f41b/ad7bf9a946e0d1c2917310f12fd8766361ab.pdf">published</a> <a href="https://www.sciencedirect.com/science/article/pii/S0894177718304862">papers</a> <a href="https://ideas.repec.org/a/eee/appene/v225y2018icp955-964.html">and</a> <a href="https://patents.google.com/patent/US20130269331A1/en">patents</a> and <a href="http://www.fluidmechanics.co.uk/isothermal-compression/">others</a> taking related approaches. 
            <br></br><br></br>
            How do the numbers work out for this? Using the formula for the energy associated with isothermal compression, we <a href="https://www.wolframalpha.com/input/?i=300+atm+*+1+m%5E3+*+Ln%5B300+atm+%2F+1+atm%5D+in+kwh">could</a> store in theory about 50 kWh per cubic meter of compressed air at 300 atm pressure, whereas LightSail was <a href="https://news.ycombinator.com/item?id=4745982">trying to</a> reach about 30 kWh per cubic meter.
			<br></br><br></br>
            <b>Molten salt thermal energy storage</b> is basically storing heat. You want to store a lot of heat, and for purely practical reasons melted salts are a good medium in which to store it. <a href="https://www.renewableenergyworld.com/2008/06/26/storing-the-sun-molten-salt-provides-highly-efficient-thermal-storage-52873/">As this article explains</a>: “The salt is a combination of sodium and potassium nitrate, with a melting temperature of 460°F. In the liquid state, molten salt has the viscosity and the appearance similar to water. “In solar applications, molten salt is used for a number of practical reasons,” says Terry Murphy, Chief Executive Officer for SolarReserve, who along with others helped develop the molten salt technology at Rocketdyne. “Molten salt is a heat storage medium that retains thermal energy very effectively over time and operates at temperatures greater than 1000°F, which matches well with the most efficient steam turbines. Second, it remains in a liquid state throughout the plant’s operating regime, which will improve long-term reliability and reduce O&M costs. And third, it’s totally ‘green,’ molten salt is a non-toxic, readily available material, similar to commercial fertilizers.” A primary advantage of molten salt central receiver technology is that the molten salt can be heated to 1050°F, which allows high energy steam to be generated at utility-standard temperatures (1650 psi minimum, 1025°F), achieving high thermodynamic cycle efficiencies of approximately 40 percent in modern steam turbine systems…” Laughlin has proposed a <a href="https://aip.scitation.org/doi/10.1063/1.4994054">particular</a> heat engine design using such molten salts.
            <br></br><br></br>
            <b>Flow batteries </b>are electrochemical energy storage. The “flow” refers to the fact that you don’t have to place the chemicals right in the path between the electrodes: the chemicals can be in separate tanks that can flow into that space as needed. Also, they can be based on materials more abundant than lithium, e.g., <a href="https://www.essinc.com/energy-storage-products/">iron</a>, and even largely on <a href="https://aziz.seas.harvard.edu/files/azizgroup/files/mja240.pdf">organic</a> chemicals, not rare elements like lithium. 
            <br></br><br></br>
            As <a href="https://www.seas.harvard.edu/news/2014/01/organic-mega-flow-battery-promises-breakthrough-for-renewable-energy">this article explains</a>: “Flow batteries store energy in chemical fluids contained in external tanks—as with fuel cells—instead of within the battery container itself. The two main components—the electrochemical conversion hardware through which the fluids are flowed (which sets the peak power capacity), and the chemical storage tanks (which set the energy capacity)—may be independently sized. Thus the amount of energy that can be stored is limited only by the size of the tanks. The design permits larger amounts of energy to be stored at lower cost than with traditional batteries.”

            </p>
			</Collapsible>

            <p>
            While it seems possible to achieve a nearly 100% variable renewables grid with massive deployment of conventional batteries and/or lots and lots of electric cars, 
            <a href="https://techcrunch.com/2018/12/24/alphabet-spins-off-moonshot-project-malta-with-backing-from-gatess-bev-fund/?guccounter=1">achieving</a> <a href="https://aip.scitation.org/doi/10.1063/1.4994054">breakthroughs</a> <a href="https://www.greentechmedia.com/articles/read/lightsail-energy-could-make-compressed-air-grid-scale-storage-work#gs.fx5hw3Uk">in</a> <a href="https://www.sciencemag.org/news/2018/10/new-generation-flow-batteries-could-eventually-sustain-grid-powered-sun-and-wind">other</a> forms of ultra-low-cost <a href="https://energyvault.com/">renewables</a> <a href="http://rameznaam.com/2015/10/14/how-cheap-can-energy-storage-get/">storage</a> — with longer working lifetimes, simpler manufacturing, less stringent materials requirements, higher capacities and lower costs than batteries when used at grid scale
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            e.g., Laughlin’s <a href="https://aip.scitation.org/doi/10.1063/1.4994054">paper</a> on molten salt suggests a marginal cost of $13/kWh
			</span> 

            — would make the grid integration and stability problems simpler and cheaper to deal with.
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            This <a href="https://twitter.com/JesseJenkins/status/1072600428188192768?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1072600428188192768%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Flongitudinal.blog%2Fco2-series-part-1-review-of-basics%2F">Twitter thread</a> and the associated paper strongly agree with that notion that a mixture including “firm” sources is most achievable:
			<br></br><br></br>
            In addition to storage per se, surplus energy generated when supply is high but demand is low may also be used for applications like <a href="https://twitter.com/perrymetzger/status/1186627944648773632">desalination</a> of water or hydrogen fuel production <a href="https://twitter.com/gnievchenko/status/1176451011600441344">via electrolysis</a>; hydrogen in turn has a number of <a href="https://www.iea.org/hydrogen2019/">applications</a> to decarbonizing <a href="https://thebreakthrough.org/issues/energy/dont-electrify-everything">other</a> sectors.

            </span> 

            It is therefore not yet clear to me exactly how much hinges on simply bringing down the raw cost of solar or wind generation through deployment and hence economies of scale of existing technologies, versus scaling up the manufacturing and use of existing storage technologies such as lithium ion and similar batteries, versus novel R&D on storage and grid integration to solve the problems that arise once the variable renewables penetration goes above 50% or so, versus pushing existing or new nuclear, <a href="https://www.nationalgeographic.com/science/2018/08/news-yellowstone-supervolcano-geothermal-energy-debate-iceland-hawaii/">geothermal</a>, and CCS technologies. Probably a mixture makes it all more tractable.
           
            </p>
            <br></br><br></br>
           
           </p>

          


          
          </section>
          </article>
        </div>    
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../section_1/1.7">&#8678;</a> &nbsp; <a href="../section_1/1.9">&#8680;</a></p>
        </div> 


      </main>

    </div>
  )
}
