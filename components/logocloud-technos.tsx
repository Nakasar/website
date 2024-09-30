'use client';

import {
  siNextdotjs,
  siJavascript,
  siGithub,
  siAmazonwebservices,
  siGooglecloud,
  siTypescript,
  siReact,
  siVuedotjs,
  siEthereum,
  siEthers,
  siSolidity,
  siGitlab,
  siKubernetes,
  siPolkadot,
  siOpenai,
  siMeta,
  siOllama,
  siMongodb,
  siMysql,
  siElastic,
  siOpentelemetry,
  siGrafana,
  siPrometheus,
  siUnrealengine,
  siGodotengine,
  siDocker,
  siPodman,
  siFigma,
  siAffinity,
  siRender,
  siDiscord,
  siHtml5,
  siCss3,
  siShadcnui,
  siTailwindcss,
  siBlackmagicdesign, siObsstudio, siPayloadcms, siPolygon
} from "simple-icons"
import {Cloud, renderSimpleIcon} from "react-icon-cloud";
import {useMemo, useState} from "react";
import Link from "next/link";
import Image from "next/image";

const techList = [
  // Languages
  {
    icon: siJavascript,
    details: {
      title: 'Javascript / Typescript',
      useCase: (
        <div>
          <p>Mainly building stuff in JS and TS! Love rust as well, still!</p>
        </div>
      ),
    },
  },
  {
    icon: siTypescript,
    details: {
      title: 'Javascript / Typescript',
      useCase: (
        <div>
          <p>Mainly building stuff in JS and TS! Love rust as well, still!</p>
        </div>
      ),
    },
  },
  {
    icon: siSolidity,
    details: {
      title: 'Solidity',
      useCase: (
        <div>
          <p>Carefully crafting and maintaining a new standard for EVM permissionned tokens, the <Link href="https://www.erc3643.org/" className="text-white hover:text-gray-600">ERC-3643</Link> aka T-REX.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/trex.png" alt={"ERC-3643 homepage"} width={400} height={200} className="rounded-md shadow-md" />
          </div>
        </div>
      ),
    }
  },
  { icon: siHtml5 },
  { icon: siCss3 },

  // FE Frameworks
  {
    icon: siNextdotjs,
    details: {
      title: 'NextJS',
      useCase: (
        <div>
          <p>Building many website and webapp with NextJS: internal applications for InTech or back-office for Tokeny, as well as the AVATAR platform apps.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/avatar-app.png" alt="AVATAR Platform admin app" width={400} height={200} className="rounded-md shadow-md" />
          </div>
        </div>
      ),
    }
  },
  { icon: siVuedotjs },

  // FE Libraries
  { icon: siReact },
  { icon: siShadcnui },
  { icon: siTailwindcss },

  // Blockchains tech
  {
    icon: siEthereum,
    details: {
      title: 'Ethereum',
      useCase: (
        <div>
          <p>Integrating various EVM chains for the <Link href="https://tokeny.com/"
                                                          className="text-white hover:text-gray-600">Tokeny</Link> platform,
            including event management, synchronisation, key and signature management, blockchain read and write
            operations, and many more.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/tokeny.png" alt="Tokeny Plateform" width={400} height={200}
                   className="rounded-md shadow-md"/>
          </div>
        </div>
      ),
    }
  },
  {
    icon: siPolkadot,
    details: {
      title: 'Polkadot',
      useCase: (
        <div>
          <p>Power <Link href="https://delmonicos.tech/"
                           className="text-white hover:text-gray-600">Delmonicos</Link> innovative approach to electric vehicle charging by creating experiments of their vision on Polkadot and Substrate to create a fully independent ecosystem of vehicles and charger identities.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/delmonicos.png" alt="Delmonicos Ecosystem" width={400} height={200}
                   className="rounded-md shadow-md"/>
          </div>
        </div>
      ),
    }
  },
  {
    icon: siPolygon,
    details: {
      title: 'Ethereum',
      useCase: (
        <div>
          <p>Helping <Link href="https://blackticket.net/"
                           className="text-white hover:text-gray-600">BlackTicket</Link> deliver on-chain sport and
            cultural event tickets for improved event safety and secondary market.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/blackticket.png" alt="BlackTicket Plateform" width={400} height={200}
                   className="rounded-md shadow-md"/>
          </div>
        </div>
      ),
    }
  },
  {
    icon: siEthers,
  },

  // CI/CD/Dev
  {
    icon: siGithub,
    details: {
      title: 'GitHub',
      useCase: (
        <div>
          <p>Managing codebase for various projects, including <Link href="https://github.com/tokenyico"
                                                                     className="text-white hover:text-gray-600">Tokeny</Link> and
            personal software. Setting up and maintaining CI/CD via GitHub actions.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/github.png" alt="GitHub profile" width={400} height={200} className="rounded-md shadow-md" />
          </div>
        </div>
      ),
    }
  },
  {
    icon: siGitlab,
    details: {
      title: 'GitLab',
      useCase: (
        <div>
          <p>Managing codebase for various internal and client projects for <Link href="https://intech.lu" className="text-white hover:text-gray-600">InTech</Link>. Using GitLab CI for direct deployment to PaaS services.</p>
        </div>
      ),
    }
  },
  { icon: siOpentelemetry },
  { icon: siGrafana },
  { icon: siPrometheus },
  { icon: siDocker },
  { icon: siPodman },

  // Clouds / providers / devops
  { icon: siAmazonwebservices },
  { icon: siGooglecloud },
  { icon: siKubernetes },
  { icon: siRender },

  // LLMs
  { icon: siOpenai },
    // mistral
  { icon: siMeta },
  { icon: siOllama },

  // Data
  { icon: siMongodb },
  { icon: siMysql },
    // Weaviate
  {
    icon: siPayloadcms,
    details: {
      title: 'Payload CMS',
      useCase: (
        <div>
          <p>Build an internal content platform for InTech to share knowledge and management tools using Payload as a CMS and NextJS as the front-end.</p>
        </div>
      ),
    },
  },
  {
    icon: siElastic,
    details: {
      title: 'ElasticSearch',
      useCase: (
        <div>
          <p>Indexing blockchain events on multiple chains and synchronizing them to build a custom event management system available as a SaaS product for <Link href="https://www.leandexer.com/" className="text-white hover:text-gray-600">Leandexer</Link></p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/leandexer.png" alt={"Leandexer features"} width={400} height={200} className="rounded-md shadow-md" />
          </div>
        </div>
      ),
    },
  },

  // Gaming
  {
    icon: siUnrealengine,
    details: {
      title: 'Unreal Engine',
      useCase: (
        <div>
          <p>Building a real-time rendered virtual human for the <Link href="https://avatar.lu/" className="text-white hover:text-gray-600">AVATAR</Link> AI platform by <Link href="https://intech.lu/" className="text-white hover:text-gray-600">InTech</Link></p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/avatar-ue.png" alt="AVATAR Unreal Engine" width={300} height={200} className="rounded-md shadow-md" />
          </div>
        </div>
      ),
    },
  },
  { icon: siGodotengine },

  // Design / Production
  { icon: siFigma },
  { icon: siAffinity },
  {
    icon: siBlackmagicdesign,
    details: {
      title: 'BlackMagicDesign',
      useCase: (
        <div>
          <p>Create a small video and audio production studio at <Link href="https://intech.lu/" className="text-white hover:text-gray-600">InTech</Link> to capture internal events, support sharing of knowledge in captivating formats.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/luxio-ia-talk.png" alt="My talk about GenAI usages in role playing games" width={300} height={200} className="rounded-md shadow-md" />
          </div>
        </div>
      ),
    },
  },
  {
    icon: siObsstudio,
    details: {
      title: 'OBS Studio',
      useCase: (
        <div>
          <p>Create a small video and audio production studio at <Link href="https://intech.lu/" className="text-white hover:text-gray-600">InTech</Link> to capture internal events, support sharing of knowledge in captivating formats.</p>
          <div className="flex justify-center py-4">
            <Image src="/images/techs/luxio-ia-talk.png" alt="My talk about GenAI usages in role playing games" width={300} height={200} className="rounded-md shadow-md" />
          </div>
        </div>
      ),
    },
  },

  // Use cases
  {
    icon: siDiscord,
    details: {
      title: 'Discord bot and activities',
      useCase: (
        <div>
          <p>Develop discord bot and activities to support role-playing games or homemade board/card games online.</p>
        </div>
      ),
    },
  },
];

export function LogocloudTechnos() {
  const [selectedTech, setSelectedTech] = useState<number | null>(null);

  const icons = useMemo(() => techList.map((tech, index) => {
    return renderSimpleIcon({
      icon: tech.icon,
      size: 120,
      fallbackHex: '#FFFFFF',
      minContrastRatio: 999,
      aProps: {
        onClick: (e) => {
          e.preventDefault();
          setSelectedTech(() => index);
        },
      },
    })
  }), []);

  const cloud = useMemo(() => <Cloud id="tech-cloud" canvasProps={{ className: 'rounded-xl shadow-inner shadow-gray-400' }}>
    {icons}
  </Cloud>, [icons]);

  return (
    <div className="lg:grid lg:grid-cols-2 gap-4">
      <div>
        {cloud}
      </div>
      {selectedTech && techList[selectedTech] ? (
        <>
          {techList[selectedTech].details ? (
            <div>
              <h2 className="text-white text-2xl font-bold my-2 bg-emerald-500 w-fit">{techList[selectedTech].details.title}</h2>
              {techList[selectedTech].details.useCase}
            </div>
          ) : (
            <div className="items-center justify-center place-self-center align-middle grow">
              <p>Nothing special here, try another one!</p>
            </div>
          )
          }
        </>
      ) : (
        <div className="items-center justify-center place-self-center align-middle grow">
          <p>Click on a a tech to see what I built!</p>
        </div>
      )}
    </div>
  )
}