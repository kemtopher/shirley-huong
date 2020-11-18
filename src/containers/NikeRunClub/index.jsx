import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import Description from '../../components/description';
import DetailFooter from '../../components/detail_footer';

export default class NikeRunClub extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Nike Run Club' />
        <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='col-12 col-md-6'>
              <Description
                title='The Product'
                className='top'
                text='Nike Run Club gives users the tools to run better by tracking a run in real time and delivering their distance, time, pace and splits summary. It has Audio Guided Runs, monthly distance challenges to keep users motivated and customized coaching plans that fits their goals. Nike encourages motivation in runners and continues to ask the question as to how they can consistently deliver that energy through music.'
              />
              <Description
                title='Scope'
                className={window.innerWidth >= 768 ? 'before-pic' : ''}
                text='I joined the Running team to redesign the way how users engage with music before and during their run. Currently, 18.4% of unique users have the music functionality toggled on within their NRC app. I worked closely with a product manager, engineer and fellow designer to push for a higher level of music engagement while continuing to provide service to Apple Music and Spotify.'
              />
            </div>
            <div className='col-12 col-md-6'>
              <Description
                title='My Role'
                className={window.innerWidth > 767 ? 'top' : ''}
                text='Product Designer, Visual Designer'
              />
              <Description
                title='Time'
                text='07/2018 — 2/2019'
              />
              <Description
                title='Credit'
                className={window.innerWidth < 768 ? 'before-pic' : ''}
                text="Co PD — Joshua Balleza
Production Designer — Jon Larama"
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/NikeRun/1_Hero.gif'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-9 col-lg-7'>
              <Description
                title='BACKGROUND'
                className='after-pic'
                text='On the engineering side, the current music player was implemented by a third party so maintenance proved difficult. An opportunity presented itself to rework the platform to integrate Apple’s new MusicKit framework and the Spotify API. The design and product teams used this as a way to re-think the user journey and create a more simple and intuitive experience.'
              />
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header'>
            UX CHALLENGES
          </div>
          <div className='row'>
            <div className='col-12 col-md-9 col-lg-7'>
              <Description
                title='CURRENT EXPERIENCE'
                className='before-pic'
                text='I reviewed the existing experience and found redundancy and unnecessary steps users would take when they’re selecting a playlist to run to. Once a user connects their music through Spotify, they are dropped onto the Pace Stations page and would need to switch to the other tab to get to their imported playlists. The challenge of this redesign is to create a seamless journey from connecting to a music platform, selecting their playlists and starting their run. The styles were also dated and needed to be consistent with the rest of the app.'
              />
              <Description
                title='MUSIC SELECTION'
                className='before-pic'
                text='The first UX hurdle to solve is when a user is on Quickstart and taps the music icon to select either Apple Music, Spotify or opt out of music entirely. If a user decides to update the playlist to listen to during their next run, they would have to confirm their music preferences and select their playlist again.'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/NikeRun/2_NRC_Audit.png'/>
              <div className='pic-desc before-border'>Audit of Music Flow</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/NikeRun/3_NRC_Runner_Thoughts.png' />
              <div className='pic-desc before-border'>Runner's thoughts before, during, post run</div>
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header before-pic-header'>
            Designs
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/NikeRun/4_Music_Selection_Playlist.gif' />
              <div className='pic-desc'>L to R: Music Selection and Playlist Landing</div>
            </div>
            <div className='col-12 col-md-7'>
              <Description
                title='MUSIC SELECTION'
                text='Before the user starts their run, on the Quickstart screen they can connect to Apple Music or Spotify for their music selection. Compared to the previous experience, the music selection page is only shown once after the initial onboarding. If the user has both Apple Music and Spotify, we added a drop down so they can easily toggle/switch between both accounts.'
              />
              <Description
                title='Playlist Landing'
                className='before-pic'
                text="Looking at the data, the Pace Stations tab had low engagement so we removed it and condensed the Music Landing into one page. We created carousels and prioritized Nike Branded and Recently played so the user has quicker access to relevant playlists. Below the carousels the user can find their imported playlists, albums and artists playlists."
              />
            </div>
            <div className='col-12 col-md-10'>
              <img className='placeholder' src='../../assets/NikeRun/5_Music_U_In-Run.gif' />
              <div className='pic-desc'>L to R: Pre-Run and In-Run</div>
            </div>
            <div className='col-12 col-md-7'>
              <Description
                title='pre-run'
                className='after-pic'
                text='Just as we wanted the landing experience to feel seamless and focused, selecting your music to start the run should reflect that as well. In the previous experience, when a user selects a playlist, without warning we bring them back to Quickstart. Refining the pre-run flow required multiple rounds of iteration and prototyping. Through hallway testing it informed our decision to have the music start when the user selects the playlist.
<br/>We added an additional music control on the landing page, so the user has the option to pause or play. When the user taps done, they are brought back into the Quickstart screen where they see a preview of the playlist that was just selected. The tool tip serves as a gentle reminder of the user’s selection.'/>
              <Description
                className='last'
                title='in-run'
                text="Looking at related applications such as Waze and Google Maps, we noticed they were using Spotify’s API for fast app switching for their music flow. During the in-run, the user is shown the music control on the bottom. When the user taps the album art it shows the expanded music control view where they can scrub through the song, switch to Nike’s Branded playlists, or fast app switch to either Apple Music or Spotify.<br/>
We wanted to leave it to the experts to deliver the audio experience and act as a remote control. By going with the fast app switch approach, users won’t need to re-learn the interface for “Nike” UI controls, since they’re already familiar with the music platform they’ve selected."/>
            </div>
          </div>
        </div>
        <DetailFooter prev={{href: '/gd/standard'}} next={{href: 'post'}}/>
      </div>
    )
  }
}
