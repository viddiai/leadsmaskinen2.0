import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy",
};

const POLICY_EMAIL = "policy@leadsmaskinen.io";

export default function IntegritetspolicyPage() {
  return (
    <SectionWrapper className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-h1 font-[family-name:var(--font-display)] font-extrabold text-graphite">
          Integritetspolicy
        </h1>
        <p className="text-body text-steel mt-4">
          Senast uppdaterad: 12 januari 2026
        </p>
        <p className="text-body text-steel mt-4">
          Den här integritetspolicyn beskriver hur Leadsmaskinen (&quot;vi&quot;)
          behandlar personuppgifter när du besöker våra webbplatser, använder
          våra portaler/tjänster eller kommer i kontakt med oss (t.ex. via
          formulär, bokningar, e-post eller outbound). Policyn beskriver också
          dina rättigheter och hur du utövar dem.
        </p>
        <p className="text-body text-steel mt-4">
          Leadsmaskinen erbjuder en AI-driven leadmotor med ICP-driven outreach,
          en nischad portal med konverteringsfunktioner/CTAs och marketing
          automation/CRM-integration.
        </p>

        {/* 1 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          1) Personuppgiftsansvarig och kontakt
        </h2>
        <p className="text-body text-steel mt-3">
          Personuppgiftsansvarig: Peak Automation AB
          (&quot;Leadsmaskinen&quot;)
          <br />
          Org.nr: 559555-6936
          <br />
          Postadress: Metodvägen 2B, 435 33 Mölnlycke
          <br />
          Kontakt i policyfrågor och för rättighetsärenden:{" "}
          <a
            href={`mailto:${POLICY_EMAIL}`}
            className="text-orange hover:underline"
          >
            {POLICY_EMAIL}
          </a>
        </p>

        {/* 2 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          2) Vilka personuppgifter vi behandlar
        </h2>
        <p className="text-body text-steel mt-3">
          Beroende på hur du interagerar med oss kan vi behandla exempelvis:
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-body text-steel">
          <li>
            <strong className="text-graphite">Kontaktuppgifter:</strong> namn,
            e-post, telefon, företagsnamn, roll/titel.
          </li>
          <li>
            <strong className="text-graphite">Kommunikation:</strong> innehåll i
            meddelanden, e-post, chattloggar, anteckningar från möten.
          </li>
          <li>
            <strong className="text-graphite">Teknisk data:</strong> IP-adress,
            enhets-/webbläsarinfo, loggar, cookie-ID, ungefärlig plats
            (stad/region).
          </li>
          <li>
            <strong className="text-graphite">Lead- och portaldata:</strong>{" "}
            uppgifter du lämnar i formulär, quiz, kalkylatorer, bokningar och i
            vissa fall svar/val i flöden.
          </li>
          <li>
            <strong className="text-graphite">
              Affärsdata (för kunder/partners):
            </strong>{" "}
            avtalsuppgifter, behörigheter, fakturaunderlag, CRM-poster.
          </li>
        </ul>
        <p className="text-body text-steel mt-3">
          Vi efterfrågar normalt inte känsliga personuppgifter (t.ex. hälsa,
          fack, religion). Om du ändå skickar sådan information kan den komma att
          behandlas som en del av kommunikationen.
        </p>

        {/* 3 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          3) Varför vi behandlar personuppgifter (ändamål) och rättslig grund
        </h2>
        <p className="text-body text-steel mt-3">
          Nedan är våra vanligaste behandlingar. Rättslig grund beror på
          situation.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          A) När du kontaktar oss eller bokar möte
        </h3>
        <p className="text-body text-steel mt-2">
          <strong className="text-graphite">Ändamål:</strong> hantera
          förfrågningar, boka/administrera möten, följa upp.
          <br />
          <strong className="text-graphite">Rättslig grund:</strong> berättigat
          intresse eller avtal (om det leder till uppdrag).
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          B) När du använder våra portaler (formulär/quiz/kalkylatorer/CTAs)
        </h3>
        <p className="text-body text-steel mt-2">
          <strong className="text-graphite">Ändamål:</strong> leverera funktion,
          skapa/hantera leads, ge resultat/återkoppling, möjliggöra uppföljning.
          <br />
          <strong className="text-graphite">Rättslig grund:</strong> avtal (om
          du använder en tjänst), berättigat intresse eller samtycke (t.ex. för
          nyhetsbrev/icke-nödvändiga cookies).
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          C) Outbound och B2B-marknadsföring (prospektering mot ICP)
        </h3>
        <p className="text-body text-steel mt-2">
          Vi kan kontakta yrkespersoner i relevanta roller (t.ex. via
          e-post/telefon/LinkedIn) i syfte att erbjuda Leadsmaskinens tjänster
          eller bjuda in till t.ex. webinar/diagnos.
        </p>
        <p className="text-body text-steel mt-2">
          <strong className="text-graphite">Ändamål:</strong> marknadsföring,
          säljarbete, leadgenerering.
          <br />
          <strong className="text-graphite">Rättslig grund:</strong> berättigat
          intresse (intresseavvägning) och alltid möjlighet att
          invända/avregistrera.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          D) Avtal och leverans till kund/partner
        </h3>
        <p className="text-body text-steel mt-2">
          <strong className="text-graphite">Ändamål:</strong> onboarding,
          leverans av portal/automation, support, förbättring, rapportering.
          <br />
          <strong className="text-graphite">Rättslig grund:</strong> avtal,
          rättslig förpliktelse (bokföring), berättigat intresse.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          E) Analys, förbättring och säkerhet
        </h3>
        <p className="text-body text-steel mt-2">
          <strong className="text-graphite">Ändamål:</strong> drift, felsökning,
          säkerhet, kvalitetsarbete, statistik.
          <br />
          <strong className="text-graphite">Rättslig grund:</strong> berättigat
          intresse; för icke-nödvändiga cookies/marknadsföringsspårning: samtycke
          (se avsnitt 7).
        </p>

        {/* 4 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          4) Varifrån uppgifterna kommer
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-body text-steel">
          <li>
            Direkt från dig (formulär, e-post, bokning, portalinteraktion).
          </li>
          <li>
            Från vår kund/partner om du lämnar uppgifter i en portal som drivs
            för en specifik kund/partner.
          </li>
          <li>
            Från offentliga källor vid B2B-prospektering (t.ex. företagswebb,
            offentliga register, LinkedIn).
          </li>
        </ul>
        <p className="text-body text-steel mt-3">
          När vi samlar in uppgifter från annan källa än dig ger vi information
          enligt GDPR artikel 14, med de undantag som kan gälla.
        </p>

        {/* 5 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          5) Mottagare – vilka vi delar personuppgifter med
        </h2>
        <p className="text-body text-steel mt-3">
          Vi delar personuppgifter när det behövs för ändamålen ovan:
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          Våra kunder/partners
        </h3>
        <p className="text-body text-steel mt-2">
          Om du lämnar dina uppgifter i en kund-/branschportal kan dina
          uppgifter delas med den kund/partner som portalen avser, så att de kan
          kontakta dig och hantera din förfrågan/lead.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          Personuppgiftsbiträden (leverantörer)
        </h3>
        <p className="text-body text-steel mt-2">
          Vi använder leverantörer för drift och leverans, typiskt:
        </p>
        <ul className="mt-2 list-disc pl-6 space-y-2 text-body text-steel">
          <li>
            CRM/marketing automation (t.ex. GoHighLevel), e-postutskick,
            bokningsverktyg
          </li>
          <li>
            Automationsplattformar (t.ex. n8n), hosting, analys/loggning
          </li>
          <li>
            AI-verktyg för text/automation (t.ex. GPT- och Claude-baserade
            tjänster)
          </li>
        </ul>
        <p className="text-body text-steel mt-3">
          Vi tecknar personuppgiftsbiträdesavtal där det krävs och instruerar
          biträden att bara behandla uppgifter enligt våra instruktioner.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-graphite">
          Myndigheter
        </h3>
        <p className="text-body text-steel mt-2">
          När vi är skyldiga enligt lag (t.ex. bokföring, rättsliga krav).
        </p>

        {/* 6 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          6) När Leadsmaskinen är personuppgiftsbiträde
        </h2>
        <p className="text-body text-steel mt-3">
          I många kundcase bygger vi portaler och automation där kunden/partnern
          bestämmer ändamål och medel för leadhanteringen. Då är kunden/partnern
          personuppgiftsansvarig och Leadsmaskinen personuppgiftsbiträde.
        </p>
        <p className="text-body text-steel mt-3">
          <strong className="text-graphite">Viktigt:</strong> Om du lämnar
          uppgifter i en sådan portal kan kunden/partnern ha en egen
          integritetspolicy och egna lagrings-/kontaktregler. Vi rekommenderar
          att varje kundportal tydligt visar vem som är personuppgiftsansvarig.
        </p>

        {/* 7 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          7) Cookies och liknande tekniker
        </h2>
        <p className="text-body text-steel mt-3">
          Vi använder cookies/liknande tekniker för funktion, säkerhet och (om du
          samtycker) analys/marknadsföring.
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-body text-steel">
          <li>
            <strong className="text-graphite">Nödvändiga cookies</strong> kan
            användas utan samtycke om de krävs för att webbplatsen/tjänsten ska
            fungera.
          </li>
          <li>
            <strong className="text-graphite">Icke-nödvändiga cookies</strong>{" "}
            (t.ex. analys/marknadsföring) kräver samtycke och du ska kunna
            återkalla det.
          </li>
        </ul>
        <p className="text-body text-steel mt-3">
          Cookies regleras i Sverige bl.a. av lagen om elektronisk kommunikation
          (LEK) med PTS som tillsynsmyndighet.
        </p>

        {/* 8 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          8) Lagringstider – hur länge vi sparar uppgifter
        </h2>
        <p className="text-body text-steel mt-3">
          Vi sparar inte personuppgifter längre än nödvändigt. Typiska
          riktvärden:
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-body text-steel">
          <li>
            <strong className="text-graphite">
              Kontakt-/förfrågningsärenden:
            </strong>{" "}
            upp till 12 månader efter avslutat ärende.
          </li>
          <li>
            <strong className="text-graphite">B2B-prospektering:</strong> tills
            du invänder/avregistrerar, eller senast 24 månader efter senaste
            relevanta kontakt (om inget affärsförhållande uppstår).
          </li>
          <li>
            <strong className="text-graphite">Portal-/leaddata:</strong> enligt
            syftet med portalen; normalt 24 månader efter senaste aktivitet, om
            inte kund/partner (som personuppgiftsansvarig) kräver annat.
          </li>
          <li>
            <strong className="text-graphite">
              Kundavtal och leveransdata:
            </strong>{" "}
            under avtalstiden + upp till 36 månader för uppföljning/anspråk.
          </li>
          <li>
            <strong className="text-graphite">Bokföringsunderlag:</strong>{" "}
            sparas enligt bokföringsregler (typiskt flera år).
          </li>
        </ul>

        {/* 9 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          9) AI-behandling och profilering
        </h2>
        <p className="text-body text-steel mt-3">
          Vi kan använda AI-verktyg för att:
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-body text-steel">
          <li>formulera outreach-meddelanden,</li>
          <li>sammanfatta mötesanteckningar,</li>
          <li>föreslå förbättringar i portal/automation och texter.</li>
        </ul>
        <p className="text-body text-steel mt-3">
          Vi försöker minimera data som skickas till AI-leverantörer (t.ex. genom
          att undvika känsliga uppgifter och bara skicka det som behövs). Om
          automatiserat beslutsfattande/profilering skulle användas på ett sätt
          som har rättsliga eller liknande betydande effekter, informerar vi
          särskilt om det.
        </p>

        {/* 10 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          10) Överföringar utanför EU/EES
        </h2>
        <p className="text-body text-steel mt-3">
          Vissa leverantörer kan behandla uppgifter utanför EU/EES (t.ex. i
          USA). När det sker använder vi lämpliga skyddsåtgärder, normalt
          EU-kommissionens standardavtalsklausuler (SCC) och vid behov
          kompletterande åtgärder, i linje med EDPB:s rekommendationer efter
          Schrems II.
        </p>

        {/* 11 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          11) Säkerhet
        </h2>
        <p className="text-body text-steel mt-3">
          Vi arbetar riskbaserat och använder lämpliga tekniska och
          organisatoriska skydd, t.ex.:
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-body text-steel">
          <li>åtkomstkontroller och behörighetsstyrning,</li>
          <li>loggning och incidenthantering,</li>
          <li>kryptering där lämpligt,</li>
          <li>leverantörsgranskning och biträdesavtal.</li>
        </ul>

        {/* 12 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          12) Dina rättigheter
        </h2>
        <p className="text-body text-steel mt-3">Du har rätt att:</p>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-body text-steel">
          <li>få information och tillgång (registerutdrag),</li>
          <li>få fel rättade,</li>
          <li>få uppgifter raderade (i vissa fall),</li>
          <li>få behandling begränsad,</li>
          <li>
            invända mot behandling (särskilt direktmarknadsföring),
          </li>
          <li>få dataportabilitet (när tillämpligt),</li>
          <li>återkalla samtycke (när vi använder samtycke),</li>
          <li>klaga hos tillsynsmyndighet (IMY).</li>
        </ul>
        <p className="text-body text-steel mt-3">
          <strong className="text-graphite">
            Så utövar du dina rättigheter:
          </strong>{" "}
          mejla{" "}
          <a
            href={`mailto:${POLICY_EMAIL}`}
            className="text-orange hover:underline"
          >
            {POLICY_EMAIL}
          </a>
          . Skriv vilken rättighet det gäller och gärna vilken tjänst/portal det
          avser. Vi kan behöva verifiera din identitet.
        </p>

        {/* 13 */}
        <h2 className="text-h3 mt-10 font-semibold text-graphite">
          13) Ändringar i policyn
        </h2>
        <p className="text-body text-steel mt-3">
          Vi kan uppdatera policyn vid behov (t.ex. vid nya funktioner,
          leverantörer eller rättsliga krav). Den senaste versionen publiceras
          alltid på våra webbplatser/portaler med uppdateringsdatum.
        </p>

        <p className="text-body text-steel mt-10 border-t border-grey-light pt-6">
          &copy; Leadsmaskinen. Alla rättigheter förbehållna.
        </p>
      </div>
    </SectionWrapper>
  );
}
