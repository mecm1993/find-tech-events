import React from 'react';
import { render, wait } from '@testing-library/react';
import { App } from './App';
import { Event } from './models/event.interface';

describe('<App />', () => {
  const mockEvents: Array<Event> = [
    {
      title: 'MonkeyFest',
      description: '',
      location: '',
      image:
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F105637154%2F216165668189%2F1%2Foriginal.20200708-145214?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=172374df8bcb7bb264663da4f8305ceb',
      date: new Date('2020-11-21T05:00:00.000Z'),
      link: 'https://www.eventbrite.com/e/monkeyfest-tickets-95313783091',
    },
    {
      title: 'CodeCampSDQ 2021',
      description: '',
      location: 'Instituto Tecnológico de Santo Domingo, Santo Domingo',
      image:
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F79739185%2F216165668189%2F1%2Foriginal.20191107-003416?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=b6770512083d2ec55a30dfca7d0067bc',
      date: new Date('2021-05-29T04:00:00.000Z'),
      link: 'https://www.eventbrite.com/e/codecampsdq-2021-tickets-80262040925',
    },
    {
      title: 'Caribbean Developers Conference 2021',
      description: '',
      location: 'Hard Rock Hotel & Casino Punta Cana, Punta Cana',
      image:
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F74388977%2F216165668189%2F1%2Foriginal.20190926-010105?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ddce31b85c1d4aae3a98cd65bf590e6e',
      date: new Date('2021-09-29T04:00:00.000Z'),
      link:
        'https://www.eventbrite.com/e/caribbean-developers-conference-2021-tickets-74229387095',
    },
    {
      title: 'El Brew: Features Y Procesos',
      description: '',
      location: '',
      image:
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F113693115%2F297877661084%2F1%2Foriginal.20201005-223248?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C111%2C3588%2C1794&s=fc92cfc93a052cd186b446a936e1ef83',
      date: new Date('2021-10-13T03:00:00.000Z'),
      link:
        'https://www.eventbrite.com/e/el-brew-features-y-procesos-tickets-124191573339',
    },
    {
      title: 'El Conversatorio: Feature Analysis',
      description: '',
      location: '',
      image:
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F113695767%2F297877661084%2F1%2Foriginal.20201005-230306?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C111%2C3588%2C1794&s=38ec2870123802daadf84c463ae123eb',
      date: new Date('2021-10-27T03:00:00.000Z'),
      link:
        'https://www.eventbrite.com/e/el-conversatorio-feature-analysis-tickets-124193123977',
    },
    {
      title: 'Webinar: Cómo Dar Servicios de Consultoría y Migraciones en AWS',
      description:
        'Hola amigos,Acompañanos este sábado 17 de octubre a las 07:00 pm en nuestro webinar de Cómo Dar Servicios de Consultoría y Migraciones en AWS, el mismo será impartido por nuestro amigo, LinkedIn Technical Instructor y Consulting Cloud Architect, Carlos Rivas - https://www.linkedin.com/in/cjrivas/Si eres del área de Desarrollo, DevOps, Infraestructura, Base de Datos o simplemente al igual que nosotros eres otro entusiasta más de AWS y te interesa aprender como brindar tus servicios como consultor, te invitamos a participar en este evento.Recuerda seguirnos y participar en nuestras redes.Telegram: https://t.me/AWSDominicanaPatreon: https://www.patreon.com/root_or_deathFacebook: https://www.facebook.com/groups/awsdominicanaMeetup: https://www.meetup.com/AWSUserGroupDominicana#NotAnotherAWSPodcast: https://www.youtube.com/watch?v=561wi48UQsgLos esperamos!#AWS #AWSEnEspanol #AWSDominicana #AWSCommunity',
      location: 'Online event',
      image:
        'https://secure.meetupstatic.com/photos/event/4/8/e/7/600_492798663.jpeg',
      date: new Date('2020-10-17T19:00:00.000Z'),
      link: 'https://www.meetup.com/AWSUserGroupDominicana/events/273725752/',
    },
    {
      title: 'Beyond Solid (Spanish)',
      description:
        "Beyond SOLIDSo you have mastered the SOLID principles of software engineering, you have learned a few design patterns, and you think you are on the top of the world in your career; Well - Not too fast my dear friend, because this is just the beginning of a long journey to being an effective Software professional.In this talk, we are going to present some of the patterns and anti patterns you should observe and employ when working with Peopleware/Humanware. Yes, you read correctly, what are the human patterns for communication, team dynamics and the human aspect of software development.The Speaker:Claudio Sanchez is no stranger to the world of software engineering. An Ex-Microsoft Software Consultant with more than two decades of shipping software, Claudio has seen lots of teams fall apart not due to buggy code or anti patterns in software development (that's a different talk), but to the anti patterns and worst practices on the Noodleware side of things.",
      location: 'Online event',
      image:
        'https://secure.meetupstatic.com/photos/event/8/d/d/2/600_492876306.jpeg',
      date: new Date('2020-10-21T19:00:00.000Z'),
      link: 'https://www.meetup.com/dotnetdom/events/273804423/',
    },
    {
      title: 'Introduccción a las DeFi (Decentralized Finance)',
      description:
        'Conjunto de charlas sobre las DeFi (Decentralized Finance)⠀⠀⠀⠀⠀⠀Ven y acompañanos en este primer conversatorio de los tres que llevaremos a cabo sobre las DeFi, en este primer encuentro estaremos abriendo las puestas a la inducción basado en ¿Qué son las DeFi? ¿Por qué esta en auge? así como conocer cuales ventajas y donde podríamos utilizar las mismas. Se parte de este espacio y creemos un conversatorio donde todos podamos ver el valor de las DeFi.Nuestra primera cita es este proximo Miercoles 21 de Octubre de 7 a 9 pm, link de inscripción en nuestra bio.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀@finextdo #MetaVersos #RealidadAumentada #DSD #finext #PocketNetwork#DeFi #Finance #Descentralized',
      location: 'Online event',
      image:
        'https://secure.meetupstatic.com/photos/event/7/e/e/8/600_492872488.jpeg',
      date: new Date('2020-10-21T19:00:00.000Z'),
      link:
        'https://www.meetup.com/Descentralized-Santo-Domingo/events/273799551/',
    },
    ,
  ];

  test('Should render without errors', () => {
    const { getByText } = render(<App />);
    const title = getByText(/Find Events/i);
    expect(title).toBeInTheDocument();
  });

  it('Should return the corresponding Cards per page', async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce((_) =>
        Promise.resolve({ json: () => Promise.resolve(mockEvents) })
      );
    const { getAllByTestId } = render(<App />);
    const AMOUNT_OF_EVENTS_PER_PAGE = 8;

    expect(global.fetch).toBeCalledTimes(1);

    await wait(() => {
      const cards: HTMLElement[] = getAllByTestId('event-col');
      expect(cards.length).toBe(AMOUNT_OF_EVENTS_PER_PAGE);
    });
  });
});
