import './App.css';
// Screen 1 Images
// import home_img from './images/home_img.jpg';
// Screen 2 Images
// import bg_image1 from './images/bg_image1.jpg';
import phone_image from './images/phone_image.png';
import instagram_icon from './images/instagram_icon.png';
import s1newimage from './images/s1newimage.png';
import s1newimageMobile from './images/homeMobile.jpg';

import girl_image1 from './images/girl_image1.jpg';
import textbox_image2 from './images/textbox_image2.png';
import plane_image1 from './images/plane_image1.png';
import happy_girl1 from './images/happy_girl1.png';
import s2bannerImage from './images/s2bannerImage.png';
// Screen 3 Images
import small_building from './images/small_building.png';
import s3rightImage from './images/s3rightImage.png';
// Screen 4 Images
import s4land from './images/s4land.png';
// import s4lunch from './images/s4lunch.png';
import s4lunch from './images/lunchS4.png';

import s4new02 from './images/s4new02.png';
// Screen 5 Images
import s503image from './images/s503image.png';
import s5lower_image from './images/s5lower_image.png';
// Screen 6 Images
import s6shibuya_sky_new from './images/s6shibuya_sky_new.png';
// import s6border from './images/s6border.png';
import s6cupimg from './images/s6cupimg.png';
import s6smallimg from './images/s6smallimg.png';
// Screen 7 Images
import miyashita_part from './images/miyashita_park.png';
// Screen 8 Images
import s8note from './images/s8note.png';
import s8bread from './images/s8bread.png';
import s8coffeeStraw from './images/s8coffeeStraw.png';
import s8main_image from './images/s8main_image.png';
// Screen 9 Images
import s9new_image from './images/s9new_image.png';
import s9belowImage from './images/s9belowImage.png';
// Screen 10 Images
import s10newImage from './images/s10newImage.png';
import s10combined from './images/s10combined.png';
// Screen 11 Images
import s11cupimage from './images/s11cupimage.png';
import s11downleft from './images/s11downleft.png';
import s11downright from './images/s11downright.png';
import s11Koffee from './images/s11Koffee.png';
// Screen 12 Images
import s12allpress from './images/s12allpress.png';
import s12allpress02 from './images/s12allpress02.png';
// Screen 13 Images
import s13bluebox from './images/s13bluebox.png';
import s13rightPart from './images/s13rightPart.png';
// Screen 14 Images
// import s14outdoorstairs from './images/s14outdoorstairs.png';
import s14outdoorstairs from './images/s_15out.png';

import s14new_image from './images/s14new_image.png';
import s14bonus_track from './images/s14bonus_track.png';


function App() {
  return (
    <div className='custom'>

      {/* Screen 1 */}
      <div className='screen_1'>
        <img className="w-screen md:h-screen bg-cover homeImage phn" src={s1newimage}
          alt="jetstar ジェットスターで行く！東京アップデート旅 | 高松-東京(成田)線"
           />
        <img className="w-screen md:h-screen bg-cover homeImage phnMobile" src={s1newimageMobile}
         alt="jetstar ジェットスターで行く！東京アップデート旅 | 高松-東京(成田)線" 
         />

      </div>

      {/* Screen 2 */}
      <div className='screen_2 relative flex justify-center items-center'>
        <div className="bg-white pt-[1.6rem] pl-6 pr-6  cstm:pt-[1.8rem] cstm:m-3  m-5 flex flex-col md:flex-row relative  sm:w-[80%] md:w-[60%] max-w-3xl planePadding">
          <img src={happy_girl1} alt="女" className='absolute -bottom-8 cstm:-bottom-6 -left-16 z-10 invisible md:visible md:w-[125px]' />
          <div className="par1 relative">
            <img src={girl_image1}
             alt="快適な機内&サービスで 成田空港までのフライトも あっという間に感じる!" />
            <img src={textbox_image2} alt="約1時間半の フライトを 快適に過ごせます!" className='absolute top-2 right-2 w-[100px] md:w-[130px]' />
          </div>
          <div className="part2 flex flex-col p-2 ml-2 planeOuter">
            <img src={plane_image1} alt="飛行機" className='md:-translate-y-10 translate-y-0' />
            <div className="big_text text-[#e97a27] xcstm:text-xl font-bold md:text-[1.64rem]   sm:text-3xl md:-translate-y-6 translate-y-0 ">
              <img src={s2bannerImage} alt="banner text" />
            </div>
            <div className="small_text xcstm:text-[0.50rem]  mt-2 md:text-[0.65rem] md:leading-5  font-semibold md:-translate-y-6 translate-y-0 planePara">
              <div className='md:tracking-widest cstm:tracking-normal'>ジェットスターの機内はグレーのレザーシートで統一された</div>
              <div className='md:tracking-widest cstm:tracking-normal'>落ち着いた雰囲気で、シートポケットを上部に配置して足元 </div>
              <div className='md:tracking-widest cstm:tracking-normal'>の広さを確保。さらに足元に十分の広さを確保した 「エクス</div>
              <div className='cstm:text-[0.59rem]' >トラ・レッグルーム・シート」や、乗り降りがしやすい「アップ・</div>
              <div className='md:tracking-widest cstm:tracking-normal'>フロントシートなどのオプション(有料) も選択可能! また、</div>
              <div className='md:tracking-widest cstm:tracking-normal'>機内メニュー「Jetstar Cafe」では幅広いメニューをスタン</div>
              <div className='md:tracking-widest cstm:tracking-normal'>バイ。 選べるオプションで自分らしい空の旅を叶えよう!</div>
            </div>
          </div>

        </div>
      </div>

      {/* Screen 3 */}
      <div className="screen_3 flex justify-center">
        <div className='w-screen'>
          <div className="box text-white bg-[#25b7aa] flex flex-col md:flex-row  p-4 mt-10 md:w-[60%] w-[90%] mx-auto cstm:w-[51%] max-w-6xl widthOuter">
            <div className='flex flex-col justify-center items-center md:w-[40%] pb-5 md:pb-0 md:-translate-y-2'>
              <div className='text-bold text-3xl md:text-[1.5rem] mb-2 text-center cstm:text-[1.5rem] '>Tokyo mizumachi</div>
              <div className='font-bold md:text-[2.8rem] sm:text-lg   font:bold cstm:text-[2rem] '>東京ミズマチ &#174;</div>
            </div>
            <div className='md:w-[60%] cstm:flex cstm:flex-col cstm:justify-center cstm:leading-6  xcstm:text-[10px] border-t-2 md:border-t-0 border-white md:border-l-2 md:border-white md:pl-5 pl-0 font-bold text-[0.60rem] md:text-[16px] s3Para'>
              <div className=' cstm:text-[12.5px] cstm:tracking-widest'>2020年開業。浅草~東京スカイツリータウン&#174;エリアを散策できる</div>
              <div className=' cstm:text-[12.5px] cstm:tracking-widest'>新机点。</div>
              <div className=' cstm:text-[12.5px] cstm:tracking-widest'>カフェ・雑貨・ホステルなど個性豊かなお店が集結!</div>
            </div>
          </div>

          <div className="box flex flex-col md:flex-row mt-10 md:w-[60%] w-[90%]  mx-auto cstm:w-[51%] lg:w-[40%] max-w-6xl widthOuter">
            <div className='flex flex-col  md:w-[60%] mobilePad'>
              <div className="part1  text-sm md:text-2xl cstm:text-[1.2rem] text-[#25b7aa] font-bold border-b-4 border-[#25b7aa]" style={{ lineHeight: '1.75em' }}>
                東京スカイツリー® の近く
                 地域に根付いた下町の魅力に出会える場所
              </div>
              <div className="part2 text-black   mt-4 cstm:text-[12px] text-[0.60rem] md:text-lg xcstm:text-[11.5px]" style={{ lineHeight: '1.75em' }}>
                夜はスカイツリーのライティングを眺めることができる。
                ライティングスケジュールはスカイツリー公式HPをチェック。
              </div>
              <div className="part3 flex  justify-between mt-5 cstm:text-[12px] xcstm:text-[15px] s3li" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#25b7aa]'>●東京ミズマチ</div>
                  <div className='text-black '>東京都墨田区向島1</div>
                  <div className='text-black '><img src={phone_image} alt="phone" className='inline w-[14px]' />※各店舗にお問合せください</div>
                  <div className='text-black '> <a href=" https://www.instagram.com/tokyo_mizumachi/" target="_blank" rel="noreferrer"> <img src={instagram_icon} alt="insta_icon" className=' inline' />@tokyo_mizumachi </a></div>
                </div>

                <div className='relative cstm:w-[40%] cstm:translate-x-10 cstm:translate-y-6'>
                  <img src={small_building} alt="tower" />
                  <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                </div>
              </div>
            </div>

            <div className='md:w-[40%] cstm:w-[50%] relative border-l-2 border-white pl-5 font-bold text-lg mt-10 md:mt-0'>
              <div className="relative">
                <img src={s3rightImage} alt="building" className='w-[40rem] cstm:translate-x-8' />
                {/* <img src={s3border_new} alt="border" className='absolute  top-1/2 left-1/2 transform -translate-x-[208px] -translate-y-1/2'/> */}
              </div>
              {/* <div className="absolute -top-6 -right- w-[200px]  lg:right-[40%]">

                <div className='bg-[#fbee17] flex h-[80px]'>

                  <div className='w-2/5 flex relative'>
                    <div className='relative w-[65%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                      <div className='text-xs'>スポット</div>
                      <div className='text-2xl'>01</div>
                      <div className="arrow-up absolute bottom-0"></div>
                    </div>
                    <div className="arrow-down absolute -bottom-1.5 left-2"></div>

                  </div>

                  <div className='w-3/5 flex items-center'>

                    <div className='font-bold text-xl'>
                      <div>東京 </div>
                      <div>ミズマチ</div>
                    </div>

                  </div>

                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Screen 4 */}
      <div className="screen_4 flex justify-center mt-[60px] ">

        <div className='w-screen'>
          <div className="box flex flex-col md:flex-row  lg:mt-0 md:w-[60%] w-[120%] mx-auto cstm:w-[58%] max-w-6xl widthOuter">
            <div className='flex flex-col md:w-[65%]'>
              <div className='relative border-l-2 border-white pl-5 font-bold text-lg'>
                <img src={s4new02} alt="building" className='pr-4 p-y-4 w-[100%] imageS4' />
                {/* <img src={s4ideabox} alt="ideabox" className='absolute left-2 top-[25%] w-[120px] md:w-[180px]' /> */}
                {/* <div className="absolute -top-6 -left-10 w-[200px]">
                  <div className='bg-[#fbee17] flex h-[80px]'>
                    <div className='w-2/5 flex relative'>
                      <div className='relative w-[65%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                        <div className='text-xs'>スポット</div>
                        <div className='text-2xl'>02</div>
                        <div className="arrow-up absolute bottom-0"></div>
                      </div>
                      <div className="arrow-down absolute -bottom-1.5 -right-20"></div>
                    </div>
                    <div className='w-3/5 flex items-center'>
                      <div className='font-bold text-xl'>
                        <div>LAND_A</div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>


              <div className='relative mt-10 mx-auto'>
                <img src={s4land} alt="tower" className='w-[14rem]' />
                <div className='w-[80px] cstm:w-[60px] opacity-90 h-[20px] bg-[#fee33d] absolute -top-2 rotate-[20deg] left-[35%] z-10'> </div>
              </div>
            </div>


            <div className='flex flex-col relative towerOuter  md:w-[70%]'>
              <div className="part1 py-1 md:text-3xl cstm:text-[1.2rem] text-[#25b7aa] xcstm:text-sm font-bold border-b-4 border-[#25b7aa] screen4Head" style={{ lineHeight: '1.75em' }}>
                下町と新しい文化を融合した
                カジュアルダイニング
              </div>
              <div className="part2 text-black cstm:text-[12px] md:text-[0.7rem]  p-0 mt-4 xcstm:text-[10px] screen4Para" style={{ lineHeight: '1.8em' }}>
                自家農園の野菜や産地にこだわった食材で作る料理が人気。テイクアウトで 
                きるデリや、テラスでBBQなど、さまざまな楽しみ方ができるのもGood!
              </div>
              <div className="part2 text-black cstm:text-[12px] md:text-[0.7rem]  p-1 mt-4 xcstm:text-[10px] screen4Paramobile" style={{ lineHeight: '24px' }}>
                自家農園の野菜や産地にこだわった食材で作る料理が人気。 
                テイクアウトで きるデリや、テラスでBBQなど、さまざまな楽しみ方ができるのもGood!
              </div>
              <div className="part3 flex py-1 justify-between mt-5 text-[0.8rem] cstm:text-[12px] screen4ParaLi" style={{ lineHeight: '24px' }}>
                <div style={{    width: "50%"}}>
                  <div className='text-[#25b7aa] font-bold'>●LAND A</div>
                  <div className='text-black'>東京都墨田区向島1-2-4</div>
                  <div className='text-black phn'><img src={phone_image} alt="phone" className='inline w-[14px] phn' />03-5637-0107</div>
                  <div className='text-black phnMobile'><a href="tel:03-5637-0107"><img src={phone_image} alt="phone" className='inline w-[14px] ' />03-5637-0107</a></div>
                  <div className='text-black'>営/平日 9:00~20:00 <br /> <span className='pl-4'>土日祝9:00~20:00</span> </div>
                  <div className='text-black'>休/不定休</div>
                  <div className='text-black'><a href=" https://www.instagram.com/land_a_mizumachi/" target="_blank" rel="noreferrer"> <img src={instagram_icon} alt="insta_icon" className=' inline' />@land_a_mizumachi  </a></div>
                </div>

                <div className=''>
                  <img src={s4lunch} alt="tower" className=' towerImg' style={{ marginLeft: '20px', marginTop:'20px' }} />
                  {/* <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute cstm:translate-y-6 -top-0.5 rotate-[20deg] left-[35%] z-10 towerStrip'> </div> */}
                </div>

                {/* <div className="absolute cstm:text-[0.6rem] bg-[#25b7aa] cstm:bottom-4  cstm:left-4 bottom-12 text-sm font-bold text-white p-3 lg:bottom-40 lg:left-28 xcstm:text-xs xcstm:-bottom-24 towerBox">
                  <div className='mb-1'>プロシュートと丸ごとブッラータ</div>
                  <div className='mb-1'>チーズのビアンカビッツァ (3,500円)</div>
                  <div className='mb-1'>LAND特製コブサラダ(R1,800円)</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Screen 5 */}
      <div className="screen_5   flex justify-center mt-[20px]">
        <div className='w-screen'>

          <div className="box flex  md:flex-row flex-col p-4 mt-10 w-[90%] md:w-[60%] mx-auto cstm:w-[51%] max-w-6xl shop03Outer widthOuter">
            <div className='flex flex-col  md:w-[60%]  relative shop03OuterTeaxt'>
              <div className="part1 py-2 md:text-3xl cstm:text-[1.2rem]  text-[#25b7aa] font-bold border-b-4 border-[#25b7aa] xcstm:text-sm screen4Head" style={{ lineHeight: '1.75em' }}>
                墨田区の魅力を発見できる
                ショップ&ワークショップの店
              </div>
              <div className="part2  text-black  cstm:text-[12px] py-2 mt-4 md:text-[15px] xcstm:text-[0.45rem] shop03Para" style={{ lineHeight: '1.8em' }}>
                <div>墨田区が運営するこちら。1階では「すみだモダン」認証商品をはじめ墨 田区内の事業者が作った工芸品や雑貨を販売。 2階ではものづくり体験 イベントが行われることも。</div>
                {/* <div>田区内の事業者が作った工芸品や雑貨を販売。 2階ではものづくり体験</div> */}
                {/* <div>イベントが行われることも。</div> */}
              </div>
              <div className="part2  text-black  cstm:text-[9px] cstm:scale-125  cstm:translate-x-10  p-2 mt-4 md:text-[15px] xcstm:text-[0.45rem] shop03ParaMobile" style={{ lineHeight: '18px' }}>
                <div style={{ lineHeight: '24px' }}>墨田区が運営するこちら。1階では「すみだモダン」認証商品をはじめ墨 田区内の事業者が作った工芸品や雑貨を販売。 2階ではものづくり体験 イベントが行われることも。</div>
                {/* <div>田区内の事業者が作った工芸品や雑貨を販売。 2階ではものづくり体験</div> */}
                {/* <div>イベントが行われることも。</div> */}
              </div>
              <div className="part3 flex flex-col md:flex-row p-2 justify-between mt-5 xcstm:text-xs shop03Li" style={{ lineHeight: '18px' }}>
                <div>
                  <div className='text-[#25b7aa]  text-[15px] cstm:text-[11px] shop03Li1'>●SHOP & WORKSHOP すみずみ</div>
                  <div className='text-black '>東京都墨田区向島 1-23-9</div>
                  <div className='text-black phn'> <img src={phone_image} alt="phone" className='inline w-[14px]' /> 03-6284-1731</div>
                  <div className='text-black phnMobile'> <a href="tel:03-6284-1731"><img src={phone_image} alt="phone" className='inline w-[14px]' /> 03-6284-1731 </a></div>

                  <div className='text-black '>営/11:00-19:00</div>
                  <div className='text-black '>休/月曜(祝日の場合は翌日)</div>
                  <div className='text-black '> <a href=" https://www.instagram.com/shopandworkshopsumizumi/" target="_blank" rel="noreferrer"> <img src={instagram_icon} alt="insta_icon" className=' inline' />  @shopandworkshopsumizumi</a></div>
                </div>


                <div className='absolute md:translate-x-16 z-20 mt-5 md:mt-0  -right-48 cstm:translate-x-52 top-[11rem] shop03ImageGirl '>
                  <img src={s5lower_image} alt="tower" className='cstm:w-[600px]' />
                  {/* <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1  rotate-[20deg] left-[35%] z-10'> </div> */}
                </div>
              </div>
            </div>

            <div className='md:w-[40%] cstm:w-[70%] cstm:translate-x-10 relative  pl-5 font-bold text-lg md:mt-0 mt-10 max-w-6xl shop03Image'>
              <img src={s503image} alt="building" />
              {/* <div className='relative float-right mt-7'>
                <img src={s5door} alt="tower" />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div> */}
            </div>
          </div>

        </div>
      </div>

      {/* Screen 6 */}
      <div className="screen_6 flex justify-center mt-[190px] ">

        <div className='w-screen'>
          <div className="box text-white bg-[#f5ac1a] flex flex-col md:flex-row p-4 w-[60%] mx-auto cstm:w-[51%] xcstm:w-[90%] max-w-6xl widthOuter">
            <div className='flex flex-col justify-center items-center md:w-[40%] pb-5 md:pb-0'>
              <div className='text-bold md:text-3xl cstm:text-xl shiEng engFont'>Shibuya</div>
              <div className='font-bold md:text-5xl cstm:text-3xl shijpy japFont'>渋谷</div>
            </div>
            <div className='md:w-[60%] cstm:flex cstm:flex-col cstm:justify-center border-t-2 md:border-t-0 border-white md:border-l-2 md:border-white md:pl-5 pl-0 font-bold md:text-sm xcstm:text-[0.53rem] nokn:text-xs shibSmall '>
              <div>若者や外国人観光客が集まる流行の発信地・渋谷で、東京の“いま”</div>
              <div>を体感!</div>
            </div>

            <div className='md:w-[60%] cstm:flex cstm:flex-col cstm:justify-center border-t-2 md:border-t-0 border-white md:border-l-2 md:border-white md:pl-5 pl-0 font-bold md:text-sm xcstm:text-[0.53rem] nokn:text-xs shibSmallMobile'>
              <div>若者や外国人観光客が集まる流行の発信地・渋谷で、東京の“いま” を体感!</div>
              {/* <div>を体感!</div> */}
            </div>
          </div>

          <div className="box flex flex-col md:flex-row  mt-10 md:w-[60%] mx-auto cstm:w-[51%] max-w-6xl s6shibuyaOuter widthOuter">
            <div className='flex flex-col md:w-[60%] cstm:w-[80%]'>
              <div className='relative  font-bold text-lg cstm:-translate-x-12 '>
                <img src={s6shibuya_sky_new} alt="" className='s6shibuya_sky_new' />
              </div>


              <div className='relative mt-2 mx-auto cstm:translate-y-5 cstm:w-[60%] cstm:-translate-x-6'>
                <img src={s6smallimg} alt="tower" />
                <div className='w-[80px] opacity-90 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%] cstm:w-[80%]'>
              <div className="part1 py-1 md:text-3xl cstm:text-[1.2rem] text-[#f7aa17] font-bold border-b-4 border-[#f7aa17] xcstm:text-sm screen4Head" style={{ lineHeight: '1.75em' }}>
                ありとあらゆるものが集まる 
                渋谷の最新スポットを巡る
              </div>
              <div className="part2 text-black md:text-[0.8rem] py-1 mt-4 xcstm:text-[0.54rem] cstm:text-[12px] shiPara" style={{ lineHeight: '1.8em' }}>
                <div>2019年に開業した「渋谷スクランブルスクエア」にある展望施設「 SHIBUYASKY」は、街を一望できる絶景スポット。 屋内展望回廊「SKY-  GALLERY」では映像による空間演出や期間限定の展示が楽しめる。</div>
                {/* <div>SHIBUYASKY」は、街を一望できる絶景スポット。 屋内展望回廊「SKY-</div> */}
                {/* GALLERY」では映像による空間演出や期間限定の展示が楽しめる。 */}
              </div>
              <div className="part2 text-black md:text-[0.8rem] p-1 mt-4 xcstm:text-[0.54rem] cstm:text-[11.5px] shiParamobile" style={{ lineHeight: '1.8em' }}>
                <div>2019年に開業した「渋谷スクランブルスクエア」にある展望施設「SHIBUYASKY」は、街を一望できる絶景スポット。 屋内展望回廊「SKY-GALLERY」では映像による空間演出や期間限定の展示が楽し <br />める。</div>
                {/* <div>「SHIBUYASKY」は、街を一望できる絶景スポット。 屋内展望回廊「SKY-</div> */}
                {/* GALLERY」では映像による空間演出や期間限定の展示が楽しめる。 */}
              </div>
              <div className="part3 flex flex-col md:flex-row p-1 justify-between mt-5 xcstm:text-[0.8rem]  cstm:text-[12px] shiPara2" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#f5ac1a]'>●SHIBUYA SKY (渋谷スカイ)</div>
                  <div className='text-black '>東京都渋谷区2-24-12 (渋谷駅直結・直上)</div>
                  <div className='text-black phn'> <img src={phone_image} alt="phone" className='inline w-[12px]' /> 03-4221-0229 (受付10:00-20:00)</div>
                  <div className='text-black phnMobile'> <a href="tel:03-4221-0229"><img src={phone_image} alt="phone" className='inline w-[12px]' />03-4221-0229 </a>(受付10:00-20:00)</div>
                  <div className='text-black '>営/ 10:00~22:30 (最終入場21:20) <br />
                    <span className='pl-4'>※屋外は悪天時閉鎖</span> </div>
                  <div className='text-black '>休/無休</div>
                  <div className='text-black '>料/大人2,000円、中高生1,600円、 <br />
                    <span className='pl-4'>小学生1,000円、幼児600円</span> </div>
                </div>

                <div className='absolute z-20 md:-bottom-12 md:right-0 -bottom-52 cstm:-right-12 right-0 text-sm font-bold text-white p-3 s6cupImg'>
                  <img src={s6cupimg} alt="tower" className='mb-5 s6cupImg' />
                </div>

                <div className="absolute bg-[#f5ac1a] md:-bottom-12 md:right-56 -bottom-[240px] cstm:-bottom-6 cstm:right-48 right-48 md:text-sm xcstm:text-[0.6rem] font-bold text-white p-3 s6cupImgBox">
                  <div className='mb-1'>渋谷のシンボル</div>
                  <div className='mb-1'>｢忠犬ハチ公｣の</div>
                  <div className='mb-1'>グッズがズラリ!</div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Screen 7 */}
      <div className="screen_7 flex justify-center mt-[-40px] screen7Outer ">
        <div className='w-screen'>
          <div className="box flex flex-col md:flex-row mt-36 md:w-[60%] mx-auto pt-4 cstm:w-[51%] max-w-6xl widthOuter">
            <div className='flex flex-col  md:w-[60%] cstm:w-[145%]'>
              <div className=" part1 md:text-3xl  cstm:text-[1.2rem] text-[#f7aa17] cstm:-translate-x-6 font-bold border-b-4 border-[#f7aa17] xcstm:text-xs screen4Head " style={{ lineHeight: '1.75em' }}>
                公園・商業施設・ホテルが融合した 
                渋谷の新たなランドマーク
              </div>
              <div className="part2 text-black cstm:text-[12px] cstm:-translate-x-6  mt-4 md:text-[0.7rem] xcstm:text-[0.5rem] nokn:text-[0.6rem] screenpara" style={{ lineHeight: '1.8em' }}>
                <div className=' tracking-tighter'>2020年、渋谷区立宮下公園が新しく生まれ変わり、ショッピングや食べ歩き、スポーツが 楽しめる低層複合施設に。</div>
                {/* <div>楽しめる低層複合施設に。</div> */}
              </div>
              <div className="part2 text-black cstm:text-[12px] cstm:-translate-x-6  mt-4 md:text-[0.7rem] xcstm:text-[0.5rem] nokn:text-[0.6rem] screenparaMobile" style={{ lineHeight: '1.8em' }}>
                <div className=' tracking-tighter'>2020年、渋谷区立宮下公園が新しく生まれ変わり、ショッピングや食べ歩き、スポーツが 楽しめる低層複合施設に。</div>
                {/* <div>楽しめる低層複合施設に。</div> */}
              </div>
              <div className="part3 cstm:-translate-x-6  mt-5 xcstm:text-sm xcstm:mb-8 screenparaLi cstm:text-[12px] " style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#f7aa17] '>●MIYASHITA PARK</div>
                  <div className='text-black '>東京都渋谷区神宮前6-20-10</div>
                  <div className='text-black phn'><span><img src={phone_image} alt="phone" className='inline w-[14px]' /></span> 03-6712-5630 (代) <br /> <span className='pl-4'>(受付 11:00~18:00)</span> </div>
                  <div className='text-black phnMobile'> <a href="tel:03-6712-5630"><span><img src={phone_image} alt="phone" className='inline w-[14px]' /></span> 03-6712-5630 (代) </a><br /><span className='pl-4'>(受付 11:00~18:00)</span></div>

                  <div className='text-black '> <a href="https://www.instagram.com/miyashitapark_/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span> {"@miyashitapark_"} </a></div>
                </div>


              </div>
            </div>

            <div className='md:w-[40%]  cstm:w-[95%] cstm:translate-x-[30px] relative font-bold text-lg miyashitaImg'>
              <img src={miyashita_part} alt="building" />
            </div>
          </div>

        </div>
      </div>

      {/* Screen 8 */}
      <div className="screen_8 flex justify-center mt-[40px] screen_8Outer">

        <div className='w-screen'>

          <div className="relative box flex flex-col md:flex-row mt-10 md:w-[60%] mx-auto cstm:w-[65%] max-w-6xl widthOuter">
            <div className=' flex flex-col md:w-[60%] cstm:w-[120%]  '>
              <div className='relative  font-bold text-lg'>
                <img src={s8main_image} alt="" className='p-4 s8main_image' />
              </div>


              <div className='relative mt-2 mx-auto cstm:w-[50%]' >
                <img src={s8note} alt="tower" className='' />
                <div className='w-[80px]  opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>
            </div>


            <div className=' flex flex-col relative  md:w-[60%]  cstm:w-[100%] screen_8wrap'>
              <div className="part1 py-1 text-3xl text-[#f7aa17] font-bold border-b-4 border-[#f7aa17] cstm:text-[1.2rem]  screen4Head screen_8head" style={{ lineHeight: '1.75em' }}>
                パンとコーヒーで 
                素敵なカフェタイムを
              </div>
              <div className="part2 text-black   py-1 mt-4 xcstm:text-[12px] screen_8p" style={{ lineHeight: '1.8em' }}>
                「パンとエスプレッソと」 の姉妹店。こだわり卵を使った限定料理が味わえ 
                るのはここだけ。 1日の始まりと終わりに足を運んでみて。
              </div>
              <div className="part2 text-black md:text-[0.7rem]  p-1 mt-4 xcstm:text-[0.5rem] screen_8pMobile" style={{ lineHeight: '1.8em' }}>
                「パンとエスプレッソと」 の姉妹店。こだわり卵を使った限定料理が味わえ
                るのはここだけ。1日の始まりと終わりに足を運んでみて。
              </div>
              <div className="part3 flex p-1 justify-between mt-5 text-[0.8rem] cstm:text-[12px] screen_8pLi" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#f5ac1a] '>●パンとエスプレッソとまちあわせ</div>
                  <div className='text-black '>東京都渋谷区神宮前6-20-10</div>
                  <div className='text-black '>MIYASHITA PARK South2F</div>
                  <div className='text-black phn'> <span><img src={phone_image} alt="phone" className='inline w-[14px]' /></span> 03-6805-0830</div>
                  <div className='text-black phnMobile'><a href="tel:03-6805-0830"><span><img src={phone_image} alt="phone" className='inline w-[14px]' /></span> 03-6805-0830 </a></div>

                  <div className='text-black '>営/8:00~23:00 <br />
                    <span className='pl-4'>(フードLO20:30、 その他LO22:00)</span> </div>
                  <div className='text-black '>休/施設に準ずる</div>
                  <div className='text-black '><a href=" https://www.instagram.com/bread.espresso.and.machiawase/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="instal" className='inline' /> </span> {"@bread.espresso.and.machiawase"}</a></div>
                </div>

              </div>
              <div className='part4 relative mt-2 h-[150px]'>
                <img src={s8coffeeStraw} alt="coffee" className='z-10 absolute right-0' />
                <div className="absolute bg-[#f5ac1a] top-0 right-28 z-0 text-sm font-bold text-white p-6">
                  <div className='mb-1'>アイスカプチーノ <br />
                    (600円)</div>
                </div>
              </div>

              <div className='part5 relative mt-2 h-[150px] xcstm:mt-14'>
                <img src={s8bread} alt="coffee" className='z-10 absolute cstm:-left-16 cstm:bottom-20 left-0 xcstm:w-[190px] nokn:w-[240px] md:left-8' />
                <div className="absolute bg-[#f5ac1a] -bottom-20 cstm:left-[20%] left-[50%] cstm:-bottom-4 z-0 text-sm font-bold text-white p-6">
                  まちあわせの <br />
                  クロックマダム (900円) <br />
                  ※モーニングはドリンク付 <br />
                  (それ以降は単品、ドリンクは別注文) <br />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Screen 9 */}
      <div className="screen_9 flex justify-center mt-[-40px]">
        <div className='w-screen'>
          <div className="box flex flex-col md:flex-row p-4 mt-32 md:w-[60%] mx-auto cstm:w-[65%] max-w-6xl widthOuter">
            <div className='flex flex-col  md:w-[60%] '>
              <div className="part1 py-2 md:text-3xl cstm:text-[1.2rem] xcstm:text-[1.0rem] text-[#f3bc3c] font-bold border-b-4 border-[#f3bc3c] screen4Head" style={{ lineHeight: '1.75em' }}>
                渋谷区民のみならず 
                多くの来街者に親しまれている場所
              </div>
              <div className="part2 text-black cstm:text-[12px]  py-2 mt-4 xcstm:text-[12px] md:text-[0.9rem] screen_9para me-2" style={{ lineHeight: '1.8em' }}>
                芝生ひろばをはじめ、ボルダリングウォール・スケート場・多目的運動施設 
                (サンドコート)を併設。
              </div>
              <div className="part2 text-black cstm:text-[12px]  p-2 mt-4 xcstm:text-[0.5rem] md:text-[0.9rem] screen_9paraMobile" style={{ lineHeight: '1.8em' }}>
                芝生ひろばをはじめ、ボルダリングウォール・スケート場・多目的運動施設
                (サンドコート)を併設。
              </div>
              <div className="part3 flex flex-col md:flex-row p-2 justify-between mt-5 cstm:text-[12px] screen_9Li" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#f3bc3c] '>●渋谷区立宮下公園</div>
                  <div className='text-black '>東京都渋谷区神宮前1-26-5</div>
                  <div className='text-black phn'> <span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-6712-5291</div>
                  <div className='text-black phnMobile'> <a href="tel:03-6712-5291"><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-6712-5291 </a></div>

                  <div className='text-black '>営/ (公園) 8:00~23:00 <br />
                    <span className="pl-4">(スポーツ施設) 9:00~22:00 </span> <br />
                    <span className="pl-4">(受付は21:30まで)</span> </div>
                  <div className='text-black '>休/年末年始</div>
                </div>
              </div>
            </div>

            <div className='md:w-[40%] relative xcstm:mt-10 md:mt-0  pl-5 font-bold text-lg cstm:w-[70%]'>
              <img src={s9new_image} alt="building" className='s9new_image' />

              <img src={s9belowImage} alt="2nd" className='absolute cstm:-bottom-[100px] cstm:-left-36 w-[220px] s9belowImage' />

            </div>
          </div>

        </div>
      </div>

      {/* Screen 10 */}
      <div className="screen_10  flex justify-center mt-[100px] s">

        <div className='w-screen'>

          <div className="box flex flex-col md:flex-row p-4 mt-10 md:w-[60%] mx-auto cstm:w-[65%] max-w-6xl widthOuter">
            <div className='flex flex-col md:w-[60%] xcstm:w-[90%]'>
              <div className='relative  font-bold text-lg'>
                <img src={s10newImage} alt="storefront_image" className='p-4 s10newImage' />
              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%]'>
              <div className="part1 py-1 cstm:text-[1.2rem] md:text-3xl xcstm:text-sm text-[#f7aa17] font-bold border-b-4 border-[#f7aa17] screen4Head" style={{ lineHeight: '1.75em' }}>
                日本初出店!世界一の 
                ピンチョスが楽しめるバル
              </div>
              <div className="part2 text-black md:text-[0.7rem] cstm:text-[12px] xcstm:text-[0.45rem] py-1 mt-4 screen_10para" style={{ lineHeight: '1.8em' }}>
                世界ピンチョス・タパスコンクールでチャンピオンに輝いた名店「GRAN- SOL」
                の日本1号店 3周年を記念し、東京オリジナルピンチョスが登場予定!
              </div>

              <div className="part2 text-black md:text-[0.7rem] cstm:text-[12px] xcstm:text-[0.45rem]  p-1 mt-4 screen_10paraMobile" style={{ lineHeight: '1.8em' }}>
                世界ピンチョス・タパスコンクールでチャンピオンに輝いた名店「GRAN- SOL」
                の日本1号店 3周年を記念し、東京オリジナルピンチョスが登場予
                定!
              </div>

              <div className="part3 flex p-1 justify-between mt-5 xcstm:text-[0.6rem] cstm:text-[12px] md:text-[0.8rem] screen_10li" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#f5ac1a] '>●GRAN SOL TOKYO</div>
                  <div className='text-black '>東京都渋谷区神宮前6-20-10</div>
                  <div className='text-black '>MIYASHITA PARK North3F</div>
                  <div className='text-black phn'> <span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-5468-3378</div>
                  <div className='text-black phnMobile'> <a href="tel:03-5468-3378"><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-5468-3378</a></div>

                  <div className='text-black '>営/11:00~23:00 (フードLO22:00 ドリンクLO22:30)</div>
                  <div className='text-black '>体/施設に準ずる</div>
                  <div className='text-black '> <a href=" https://www.instagram.com/gransol_shibuya/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span> {"@gransol shibuya"}</a></div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:mt-5 cstm:w-[65%] md:w-[60%] xcstm:w-[90%] mx-auto cstm:items-center justify-center md:translate-x-20 xcstm:mt-10">

            <img src={s10combined} alt="combined" className='w-[80%] s10bottom' />

          </div>

        </div>

      </div>

      {/* Screen 11 */}
      <div className="screen_11  flex justify-center mt-[20px]">
        <div className='w-screen'>
          <div className="box text-white bg-[#00afde] flex flex-col md:flex-row p-4 md:w-[60%] xcstm:w-[90%] mx-auto cstm:w-[52%] max-w-6xl widthOuter">
            <div className='flex flex-col justify-center items-center md:w-[40%] xcstm:w-[90%] xcstm:pb-3 md:pb-0'>
              <div className='text-bold md:text-3xl xcstm:text-2xl mb-2 xcstm:text-center engFont'>Kiyosumishirakawa</div>
              <div className='font-bold text-5xl japFont'>清澄白河</div>
            </div>
            <div className='flex flex-col justify-center md:w-[60%] xcstm:w-[90%] md:border-l-2 xcstm:border-t-2 md:border-t-0 border-white md:pl-5 xcstm:pl-0 font-bold xcstm:text-[0.65rem] xcstm:pt-2 md:pt-0 md:text-lg screen11Head'>
              <div>"コーヒーの街として話題沸騰中の清澄白河。</div>
              <div>  自然やアートにも触れられるスポットにも注目!</div>
            </div>
          </div>

          <div className="box flex flex-col-reverse md:flex-row p-4 mt-5 md:w-[60%] mx-auto cstm:w-[60%] max-w-6xl cstm:translate-x-12 widthOuter">
            <div className='flex flex-col  md:w-[60%] cstm:w-[50%]'>
              <div className="part1  pt-2 pb-2 cstm:text-[1.2rem] md:text-3xl xcstm:text-xl text-[#00afde] cstm:translate-x-1 font-bold border-b-4 border-[#00afde] screen4Head" style={{ lineHeight: '1.75em' }}>
                コーヒーをもっと好きになる 
                ここにしかない新しい体験
              </div>
              <div className="part2 text-black cstm:text-[12px] py-2 mt-4 md:text-[15px] xcstm:text-[8px] flex flex-col items-center screen11Para " style={{ lineHeight: '1.8em' }}>
                <div>世界各国から厳選したロースターの豆を扱うコーヒー専門店。豆の産地 
                  や品種の違い、ローストの違いをコース仕立てで体感することができる。</div>
              </div>
              <div className="part2 text-black cstm:-translate-x-2 cstm:text-[11.5px] p-2 mt-4 md:text-[15px] xcstm:text-[8px] flex flex-col items-center screen11ParaMobile " style={{ lineHeight: '1.8em' }}>
                <div>世界各国から厳選したロースターの豆を扱うコーヒー専門店。豆の産地
                  や品種の違い、ローストの違いをコース仕立てで体感することができる。</div>
              </div>
              <div className="part3 flex p-2 justify-between mt-5">

                <div className='relative cstm:-translate-x-5'>
                  <img src={s11cupimage} alt="cupimage" />
                  <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                  <div className="bg-[#00afde] absolute -z-10 text-sm xcstm:-bottom-20 cstm:-right-40 md:-bottom-3 md:-right-44 xcstm:-right-0  font-bold text-white p-4 boxXy">
                    <div className='mb-1'>Koffee Mameya Course <br /> コーヒーマメヤコース <br /> (3,000円)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-[40%] cstm:w-[60%]  relative pl-5 xcstm:mt-28 md:mt-0 font-bold text-lg s11Koffee'>
              <img src={s11Koffee} alt="couple_date" className='s11Koffee' />
            </div>
          </div>

          <div className="box2 flex flex-col md:flex-row justify-between p-4 mx-auto md:w-[60%] cstm:[60%] max-w-6xl widthOuter">
            <div className='cstm:translate-x-10 cstm:text-[12px] screen11Para2' style={{ lineHeight: '1.8em' }}>
              <div className="part2 text-black text-[12px]  p-1 mb-4 screen11Para2" style={{ lineHeight: '1.8em' }}>
                築50年ほどの倉庫をリノベーションした店舗、能の舞台を彷彿させ 
                るような凛としたおしゃれな空間が広がる。
              </div>
              <div className='text-[#00afde] '>●KOFFEE MAMEYA-Kakeru-</div>
              <div className='text-black '>東京都江東区平野2-16-14</div>
              <div className='text-black phn'><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-6240-3072 (予約優先)</div>
              <div className='text-black phnMobile'> <a href="tel:03-6240-3072"> <span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-6240-3072 (予約優先)</a></div>

              <div className='text-black '>営/11:00-19:00</div>
              <div className='text-black '>休/無休</div>
              <div className='text-black '><a href="https://www.instagram.com/koffee_mameya_kakeru/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span> @koffee_mameya_kakeru </a></div>
            </div>

            <div className="image_part flex justify-center items-center xcstm:translate-y-20 md:translate-y-0 cstm:-translate-x-5">
              <div className='relative translate-x-12 screen11Right'>
                <img src={s11downleft} alt="leftimage" className='w-[270px]' />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>

              <div className='relative -translate-y-14'>
                <img src={s11downright} alt="rightimage" className='w-[240px] screen11Left' />
                <div className='w-[60px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>

            </div>
          </div>



        </div>
      </div>

      {/* Screen 12 */}
      <div className="screen_12  justify-center mt-[20px]">

        <div className='w-screen'>

          <div className="box flex flex-col md:flex-row p-4 xcstm:mt-20 md:mt-10 md:w-[60%] mx-auto xcstm:w-[90%] cstm:w-[60%] max-w-6xl screen_12wrap widthOuter">
            <div className='flex flex-col md:w-[60%]'>
              <div className='relative  font-bold xcstm:text-sm md:text-lg cstm:w-[110%] cstm:-translate-x-10'>
                <img src={s12allpress} alt="storefront_image" className='p-4 s12allpress' />

              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%]'>
              <div className="part1 py-1 md:text-3xl cstm:text-[1.2rem] xcstm:text-sm text-[#00aee0] font-bold border-b-4 border-[#00aee0] screen4Head" style={{ lineHeight: '1.75em' }}>
                明るく開かれた心地よい空間で 
                美味しいコーヒーとの出会いを
              </div>
              <div className="part2 text-black xcstm:text-[0.45rem] cstm:text-[12px] md:text-[0.8rem]  py-1 mt-4 screen12Para" style={{ lineHeight: '1.8em' }}>
                ニュージーランド発のロースター&カフェ、2022年4月に、 店舗&メニュー 
                をリニューアル。 焙煎士との距離が近いので、好みの味を探したい方はぜ 
                ひ。
              </div>
              <div className="part2 text-black xcstm:text-[0.45rem] cstm:text-[12px] md:text-[0.8rem]  p-1 mt-4 screen12ParaMobile" style={{ lineHeight: '1.8em' }}>
                ニュージーランド発のロースター&カフェ、2022年4月に、 店舗&メニュー
                をリニューアル。 焙煎士との距離が近いので、好みの味を探したい方はぜ
                ひ。
              </div>
              <div className="part3 flex p-1 justify-between mt-5 xcstm:text-sm md:text-[1rem] cstm:text-[12px] screen12Li" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#00aee0]  mb-[2px]'>●Allpress Espresso Tokyo Roastery&Cafe</div>
                  <div className='text-black  mb-[2px]'>東京都江東区平野3-7-2</div>
                  <div className='text-black  mb-[2px] phn'> <span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-5875-9131</div>
                  <div className='text-black  mb-[2px] phnMobile'> <a href="tel:03-5875-9131"> <span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 03-5875-9131</a></div>

                  
                  <div className='text-black  mb-[2px]'>営/9:00-17:00</div>
                  <div className='text-black  mb-[2px]'>休/無休</div>
                  <div className='text-black  mb-[2px]'> <a href=" https://www.instagram.com/allpressespressojapan/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span> {"@allpressespressojapan"}</a></div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  mt-[-8px] md:w-[60%] mx-auto justify-center widthOuter">

            <img src={s12allpress02} alt="all_press" className='s12allpress02' />
          </div>

        </div>

      </div>

      {/* Screen 13 */}
      <div className="screen_13 flex justify-center mt-[20px]">
        <div className='w-screen'>

          <div className="box flex flex-col-reverse md:flex-row  mt-4 md:w-[60%] xcstm:w-[90%] mx-auto cstm:w-[60%] max-w-6xl screen13Wrap widthOuter">
            <div className='flex flex-col  md:w-[60%] cstm:w-[50%] cstm:translate-x-10'>
              <div className="part1 py-2 md:text-3xl cstm:text-[1.2rem] xcstm:text-xl text-[#00afde] font-bold border-b-4 border-[#00afde] screen4Head" style={{ lineHeight: '1.75em' }}>
                アートを身近に感じられる  清澄白河のランドマーク
              </div>
              <div className="part2 text-black xcstm:text-[0.4rem] cstm:text-[12px] md:text-[0.8rem]  mt-4 screen13Para" style={{ lineHeight: '1.8em' }}>
                豊かな木場公園内にある現代美術専門の美術館図書室には「こども 
                としょしつ」、エントランスや中庭にはベンチがあり、寛ぐことができる。ア 
                ートに触れて、心安らぐひと時を
              </div>
              <div className="part2 text-black xcstm:text-[0.4rem] cstm:text-[11.5px] md:text-[0.8rem]  mt-4 screen13ParaMobile" style={{ lineHeight: '1.8em' }}>
                豊かな木場公園内にある現代美術専門の美術館図書室には「こども
                としょしつ」、エントランスや中庭にはベンチがあり、寛ぐことができる。ア
                ートに触れて、心安らぐひと時を
              </div>
              <div className="part3 flex p-2 justify-between mt-5 xcstm:text-xs md:text-md screen13Li" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#00aee0] cstm:mb-[5px] '>●東京都現代美術館</div>
                  <div className='text-black cstm:mb-[5px]'>東京都江東区三好4-1-1 (木場公園内)</div>
                  <div className="text-black cstm:mb-[5px] phn"><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 050-5541-8600(ハローダイヤル) </div>
                  <div className="text-black cstm:mb-[5px] phnMobile"> <a href="tel: 050-5541-8600"><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span> 050-5541-8600(ハローダイヤル) </a></div>

                  <div className='text-black cstm:mb-[5px]'>閉館/10:00~18:00 (展示室入室は17:30まで)</div>
                  <div className='text-black cstm:mb-[5px]'>休/月曜(祝日の場合は翌平日) <br />
                    <span className="pl-4 cstm:mt-[4px]">※展示入替期間、年末年始は休館</span> </div>
                  <div className='text-black cstm:mb-[5px]'>料/入館のみは無料観覧料は展覧会により異なる</div>
                </div>
              </div>
              <div className='md:mt-20 cstm:mt-36 xcstm:mt-8 '>
                <img src={s13bluebox} alt="bluebox" className='' />
              </div>
            </div>

            <div className='md:w-[40%] cstm:w-[60%] cstm:translate-x-10 relative xcstm:mt-20 md:mt-0  font-bold text-lg s13rightPart '>
              <img src={s13rightPart} alt="Right_Part" />
            </div>
          </div>


        </div>
      </div>

      {/* Screen 14 */}
      <div className="screen_14  flex justify-center md:mt-[20px] xcstm:mt-[60px]">

        <div className='w-screen'>
          <div className="box text-white bg-[#ee798c] flex flex-col md:flex-row p-4 mt-10 md:w-[60%] xcstm:w-[90%] mx-auto cstm:w-[55%] max-w-6xl widthOuter ">
            <div className='flex flex-col justify-center items-center md:w-[40%] xcstm:mb-3 md:mb-0 '>
              <div className='text-bold text-3xl mb-2 cstm:text-xl engFont'>Shimokitazawa</div>
              <div className='font-bold text-5xl cstm:text-4xl japFont'>下北沢</div>
            </div>
            <div className='md:w-[60%] cstm:flex cstm:flex-col-reverse justify-center cstm:text-[14px]  md:border-l-2 xcstm:border-l-0 xcstm:border-t-2 md:border-t-0  border-white pl-5 font-bold xcstm:text-[0.45rem] md:text-[1rem] shibSmall jpy22'>
              <div>小田急線線路跡の開発が進み、変化がめまぐるしい下北沢。新しい <br />
                発見がある“街ぶら”に最適なエリア。</div>
            </div>
            <div className='md:w-[60%] cstm:flex cstm:flex-col-reverse justify-center cstm:text-[14px]  md:border-l-2 xcstm:border-l-0 xcstm:border-t-2 md:border-t-0  border-white pl-5 font-bold xcstm:text-[0.45rem] md:text-[1rem] shibSmallMobile'>
              <div>小田急線線路跡の開発が進み、変化がめまぐるしい下北沢。新しい 
                発見がある“街ぶら”に最適なエリア。</div>
            </div>
          </div>

          <div className="box flex flex-col md:flex-row p-4 mt-5 md:w-[60%] xcstm:w-[90%] mx-auto cstm:w-[58%] max-w-6xl screen14Wrap widthOuter">
            <div className='flex flex-col md:w-[60%]'>
              <div className='relative  font-bold text-lg cstm:w-[120%] cstm:-translate-x-16'>
                <img src={s14new_image} alt="" className='p-4 imageWid' />
              </div>
              <div className='lastSectionMobile'>
                <div className="part1 py-1 md:text-3xl xcstm:text-xl cstm:text-[1.2rem] text-[#ee798c] font-bold border-b-4 border-[#ee798c] screen4Head" style={{ lineHeight: '1.75em' }}>
                  人と本がつながる場所
                </div>
                <div className="part2 text-black xcstm:text-[0.45rem] cstm:text-[12px] md:text-[0.8rem]  py-1 mt-4 screen14ParaMobile" style={{ lineHeight: '1.8em' }}>
                  店名の「B&B」は “BOOKS & BEER"の略で、本はもちろん、アルコールや
                  こだわりのコーヒーも購入できる。独自のセレクションによる本棚から、あ
                  なたが気になる一冊を見つけて。
                </div>
                <div className="part3 flex flex-col md:flex-row p-1 cstm:text-[12px] justify-between mt-5 text-[0.7rem]" style={{ lineHeight: '1.8em' }}>
                  <div>
                    <div className='text-[#ee798c]'>●本屋 B&B</div>
                    <div className='text-black'>東京都世田谷区代田2-36-15</div>
                    <div className='text-black'>BONUS TRACK 2F</div>
                    <div className='text-black phn'><span><img src={phone_image} alt="phone" className='inline w-[15px] mr-1' /></span>03-6450-8272</div>
                    <div className='text-black phnMobile'> <a href="tel:03-6450-8272"><span><img src={phone_image} alt="phone" className='inline w-[15px] mr-1' /></span>03-6450-8272</a></div>

                    <div className='text-black'>営/11:00-19:00 <br /> &nbsp; &nbsp;(日によって変動あり)</div>
                    <div className='text-black'> 休/無休(年末年始および <br />&nbsp; &nbsp; 特別な場合を除く)</div>
                    <div className='text-black'><a href="https://www.instagram.com/books_and_beer_/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span>{"@books_and_beer_"} </a></div>

                  </div>

                  <div>
                    <img src={s14outdoorstairs} alt="outdoorstairs" className='w-[80%] ' />
                  </div>
                </div>
              </div>

              <div className='lastSection2'>
                <div className="part1 py-1 md:text-[1.4rem] cstm:text-[1.2rem] xcstm:text-sm text-[#ee798c] font-bold border-b-4 border-[#ee798c]  sm:mt-10 md:mt-24 screen14Part1 screen4Head" style={{ lineHeight: '1.75em', marginTop: '115px' }}>
                  新しい出会いや感性が刺激される
                  カルチャーの発信地!
                </div>
                <div className="part2 text-black cstm:text-[12px]  xcstm:text-[0.5rem] md:text-[0.7rem] p-1 mt-4 screen14Para" style={{ lineHeight: '1.8em' }}>
                  2020年春「下北線路街」 の一角にOPEN。 個性豊かな13のお店が軒を 
                  重ね、小さな街を形成、不定期で開催されるイベントもCheck!
                </div>
                <div className="part2 text-black cstm:text-[12px]  xcstm:text-[0.5rem] md:text-[0.7rem] p-1 mt-4 screen14ParaMobile" style={{ lineHeight: '1.8em' }}>
                  2020年春「下北線路街」 の一角にOPEN。 個性豊かな13のお店が軒を
                  重ね、小さな街を形成、不定期で開催されるイベントもCheck!
                </div>
                <div className="part3 flex flex-col cstm:text-[12px] md:flex-row p-1 justify-between mt-5 text-[0.7rem] screen14Li" style={{ lineHeight: '1.8em' }}>
                  <div>
                    <div className='text-[#ee798c] '>●BONUS TRACK</div>
                    <div className='text-black '>東京都世田谷区代田2-36-12~15</div>
                    <div className='text-black '><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span><span>※各店舗へお問合せください</span></div>
                    {/* <div className='text-black '><span><img src={instagram_icon} alt="insta" className='inline' /></span>{"@bonustrack_skz"}</div> */}
                    <div className='text-black '><a href="https://www.instagram.com/bonustrack_skz/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span>{"@bonustrack_skz"}</a></div>

                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col relative  md:w-[66%]'>

              {/* <div className="part1 p-1 md:text-[1.4rem] cstm:text-[24px] xcstm:text-sm text-[#ee798c] font-bold border-b-4 border-[#ee798c]  sm:mt-10 md:mt-24 screen14Part1" style={{ lineHeight: '36px', marginTop: '115px' }}>
                新しい出会いや感性が刺激される<br />
                カルチャーの発信地!
              </div>
              <div className="part2 text-black cstm:text-[12px]  xcstm:text-[0.5rem] md:text-[0.7rem] p-1 mt-4 screen14Para" style={{ lineHeight: '1.8em' }}>
                2020年春「下北線路街」 の一角にOPEN。 個性豊かな13のお店が軒を <br />
                重ね、小さな街を形成、不定期で開催されるイベントもCheck!
              </div>
              <div className="part2 text-black cstm:text-[12px]  xcstm:text-[0.5rem] md:text-[0.7rem] p-1 mt-4 screen14ParaMobile" style={{ lineHeight: '1.8em' }}>
                2020年春「下北線路街」 の一角にOPEN。 個性豊かな13のお店が軒を
                重ね、小さな街を形成、不定期で開催されるイベントもCheck!
              </div>
              <div className="part3 flex flex-col cstm:text-[12px] md:flex-row p-1 justify-between mt-5 text-[0.7rem] screen14Li" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#ee798c] '>●BONUS TRACK</div>
                  <div className='text-black '>東京都世田谷区代田2-36-12~15</div>
                  <div className='text-black '><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span><span>※各店舗へお問合せください</span></div>
                  <div className='text-black '><span><img src={instagram_icon} alt="insta" className='inline' /></span>{"@bonustrack_skz"}</div>
                </div>
              </div> */}
               <div className="lastSection">
             <div className="part1 py-1 md:text-3xl xcstm:text-xl cstm:text-[1.2rem] text-[#ee798c] font-bold border-b-4 border-[#ee798c]" style={{ lineHeight: '1.75em' }}>
                人と本がつながる場所
              </div>
              <div className="part2 text-black xcstm:text-[0.45rem] cstm:text-[12px] md:text-[0.8rem]  py-1 mt-4 screen14Para" style={{ lineHeight: '1.8em' }}>
                店名の「B&B」は “BOOKS & BEER"の略で、本はもちろん、アルコールや
                こだわりのコーヒーも購入できる。独自のセレクションによる本棚から、あ
                なたが気になる一冊を見つけて。
              </div>
              <div className="part3 flex flex-col md:flex-row p-1 cstm:text-[12px] justify-between mt-5 text-[0.7rem]" style={{ lineHeight: '1.8em' }}>
                <div>
                  <div className='text-[#ee798c]'>●本屋 B&B</div>
                  <div className='text-black'>東京都世田谷区代田2-36-15</div>
                  <div className='text-black'>BONUS TRACK 2F</div>
                  <div className='text-black'><span><img src={phone_image} alt="phone" className='inline w-[15px] mr-1' /></span>03-6450-8272</div>
                  <div className='text-black'>営/11:00-19:00 <br /> &nbsp; &nbsp;(日によって変動あり)</div>
                  <div className='text-black'> 休/無休(年末年始および <br />&nbsp; &nbsp; 特別な場合を除く)</div>
                  {/* <div className='text-black'><span><img src={instagram_icon} alt="insta" className='inline' /></span>{"@books_and_beer_"}</div> */}
                  <div className='text-black'><a href="https://www.instagram.com/books_and_beer_/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span>{"@books_and_beer_"} </a></div>


                </div>

                <div>
                  <img src={s14outdoorstairs} alt="outdoorstairs" className='w-[80%] ' />
                </div>
              </div>
             </div>
            <div className='flexLast'>
            <div className='lastSectionMobile2'>
                <div className="part1 p-1 md:text-[1.4rem] cstm:text-[24px] xcstm:text-sm text-[#ee798c] font-bold border-b-4 border-[#ee798c]  sm:mt-10 md:mt-24 screen14Part1 screen4Head" style={{ lineHeight: '36px', marginTop: '115px' }}>
                  新しい出会いや感性が刺激される<br />
                  カルチャーの発信地!
                </div>
                <div className="part2 text-black cstm:text-[12px]  xcstm:text-[0.5rem] md:text-[0.7rem] p-1 mt-4 screen14Para" style={{ lineHeight: '1.8em' }}>
                  2020年春「下北線路街」 の一角にOPEN。 個性豊かな13のお店が軒を <br />
                  重ね、小さな街を形成、不定期で開催されるイベントもCheck!
                </div>
                <div className="part2 text-black cstm:text-[12px]  xcstm:text-[0.5rem] md:text-[0.7rem] p-1 mt-4 screen14ParaMobile" style={{ lineHeight: '1.8em' }}>
                  2020年春「下北線路街」 の一角にOPEN。 個性豊かな13のお店が軒を
                  重ね、小さな街を形成、不定期で開催されるイベントもCheck!
                </div>
                <div className="part3 flex flex-col cstm:text-[12px] md:flex-row p-1 justify-between mt-5 text-[0.7rem] screen14Li" style={{ lineHeight: '1.8em' }}>
                  <div>
                    <div className='text-[#ee798c] '>●BONUS TRACK</div>
                    <div className='text-black '>東京都世田谷区代田2-36-12~15</div>
                    <div className='text-black '><span><img src={phone_image} alt="phone" className='inline w-[15px]' /></span><span>※各店舗へお問合せください</span></div>
                    <div className='text-black '><a href="https://www.instagram.com/bonustrack_skz/" target="_blank" rel="noreferrer"><span><img src={instagram_icon} alt="insta" className='inline' /></span>{"@bonustrack_skz"}</a></div>
                  </div>
                </div>
              </div>
            

              <div className='relative mt-10'>
                <div className='relative flex justify-center cstm:w-[120%]'>
                  <img src={s14bonus_track} alt="couple_date" className=' w-[85%] imageWid2' />
                  {/* <img src={s6border} alt="text" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center p-2'>
        <a href="https://www.takamatsu-airport.com/narita/"  rel="noreferrer" className='mx-auto md:w-[40%] xcstm:w-[90%] bg-[#ef7625] cstm:text-[18px] rounded-sm cursor-pointer text-center xcstm:text-md md:text-xl text-white py-2'>高松-成田線のお得な情報はこちら</a>
      </div>

      <div className='flex justify-center p-7 bg-[#212121] mt-7 footerRes'>
        <div className="text-center text-white p-3 text-sm">Copyright(C)2022 高松空港振興期成会 All rights reserved.</div>
      </div>



    </div>
  );
}

export default App;
