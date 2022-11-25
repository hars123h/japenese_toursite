import './App.css';
// Screen 1 Images
import home_img from './images/home_img.jpg';
// Screen 2 Images
// import bg_image1 from './images/bg_image1.jpg';
import s1newimage from './images/s1newimage.png';
import girl_image1 from './images/girl_image1.jpg';
import textbox_image2 from './images/textbox_image2.png';
import plane_image1 from './images/plane_image1.png';
import happy_girl1 from './images/happy_girl1.png';
// Screen 3 Images
import small_building from './images/small_building.png';
import big_building from './images/big_building.png';
// Screen 4 Images
import s4girl from './images/s4girl.png';
import s4ideabox from './images/s4ideabox.png';
import s4land from './images/s4land.png';
import s4lunch from './images/s4lunch.png';
// Screen 5 Images
import s5girl from './images/s5girl.png';
import s5door from './images/s5door.png';
import s5shop from './images/s5shop.png';
// Screen 6 Images
import s6girl from './images/s6girl.png';
import s6border from './images/s6border.png';
import s6cupimg from './images/s6cupimg.png';
import s6text from './images/s6text.png';
import s6smallimg from './images/s6smallimg.png';
// Screen 7 Images
import s7park from './images/s7park.png';
// Screen 8 Images
import s8girl from './images/s8girl.png';
import s8note from './images/s8note.png';
import s8bread from './images/s8bread.png';
import s8coffeeStraw from './images/s8coffeeStraw.png';
// Screen 9 Images
import s9rightbuilding from './images/s9rightbuilding.png';
import s9leftbuilding from './images/s9leftbuilding.png';
// Screen 10 Images
import s10storefront from './images/s10storefront.png';
import s10leftfood from './images/s10leftfood.png';
import s10rightfood from './images/s10rightfood.png';
// Screen 11 Images
import s11cupimage from './images/s11cupimage.png';
import s11downleft from './images/s11downleft.png';
import s11downright from './images/s11downright.png';
import s11ideabox from './images/s11ideabox.png';
import s11manwoman from './images/s11manwoman.png';
// Screen 12 Images
import s12coffee from './images/s12coffee.png';
import s12coffeeshop from './images/s12coffeeshop.png';
import s12ideabox from './images/s12ideabox.png';
import s12pouringcoffee from './images/s12pouringcoffee.png';
// Screen 13 Images
import s13bluebox from './images/s13bluebox.png';
import s13corridor from './images/s13corridor.png';
import s13ideabox from './images/s13ideabox.png';
import s13moplus from './images/s13moplus.png';
import s13officeroom from './images/s13officeroom.png';
// Screen 14 Images
import s14library from './images/s14library.png';
import s14outdoorstairs from './images/s14outdoorstairs.png';
import s14girloutdoor from './images/s14girloutdoor.png';


function App() {
  return (
    <div className='custom'>

      {/* Screen 1 */}
      <div className='screen_1'>
        <img className="w-screen md:h-screen bg-cover" src={s1newimage} alt="homepage_image" />
      </div>

      {/* Screen 2 */}
      <div className='screen_2 relative flex justify-center items-center'>
        {/* <div className='bg-white cstm:p-2 p-3 flex flex-col md:flex-row w-4/6 cstm:w-[80%] z-5'>
          <img src={happy_girl1} alt="happy_girl" className='absolute z-10 -bottom-0.5 left-56 invisible md:visible md:left-20' />
          <div className='cstm:w-4/6 md:w-3/6 relative bg-white flex items-center'>

            <img src={girl_image1} alt="girl_image" className="mx-auto" />
            <img src={textbox_image2} alt="girl_image" className='absolute md:top-6 md:right-14 top-1 right-1 w-20 md:w-[140px] cstm:top-14 cstm:right-10' />

          </div>
          <div className='cstm:w-[80%] md:w-3/6 relative bg-white p-4 cstm:ml-2 cstm:p-1'>
            <img src={plane_image1} alt="plane_image" className='absolute md:-top-6 right-1 md:right-0 top-5 w-full'  />
            <div className='text-[13px] md:text-[36px]  text-[#e97a27] font-bold md:mt-10 cstm:mt-12'>
              快適な機内&サービスで <br />
              成田空港まで のフライトも <br />
              あっという間に感じる! <br />
            </div>
            <div className='font-semibold mt-3 text-[5px] md:text-[15px] cstm:text-[13px]'>
              ジェットスターの機内はグレーのレザーシートで統一された <br />
              落ち着いた雰囲気で、シートポケットを上部に配置して足元 <br />
              の広さを確保。さらに足元に十分の広さを確保した 「エクス<br />
              トラ・レッグルーム・シート」や、乗り降りがしやすい「アップ・<br />
              フロントシートなどのオプション(有料) も選択可能! また、<br />
              機内メニュー「Jetstar Cafe」では幅広いメニューをスタン<br />
              バイ。 選べるオプションで自分らしい空の旅を叶えよう!
            </div>
          </div>

        </div> */}
        <div className="bg-white p-2 flex flex-col md:flex-row relative sm:w-[80%] md:w-[60%] lg:w-[40%]">
          <img src={happy_girl1} alt="happy_girl" className='absolute -bottom-3 -left-16 z-10 invisible md:visible' />
          <div className="par1 relative">
            <img src={girl_image1} alt="girl_image" />
            <img src={textbox_image2} alt="idea box" className='absolute top-5 right-5 w-[100px] md:w-[150px]' />
          </div>
          <div className="part2 flex flex-col p-2 ml-2">
            <img src={plane_image1} alt="plane_image" className='md:-translate-y-6 translate-y-0' />
            <div className="big_text text-[#e97a27] xcstm:text-xl font-bold text-2xl  sm:text-3xl md:-translate-y-6 translate-y-0 lg:text-4xl">
              快適な機内&サービスで <br />
              成田空港まで のフライトも <br />
              あっという間に感じる! <br />
            </div>
            <div className="small_text xcstm:text-[0.50rem] mt-2 md:text-md text-[0.65rem] font-semibold md:-translate-y-6 translate-y-0 lg:text-[0.95rem]">
              ジェットスターの機内はグレーのレザーシートで統一された <br />
              落ち着いた雰囲気で、シートポケットを上部に配置して足元 <br />
              の広さを確保。さらに足元に十分の広さを確保した 「エクス<br />
              トラ・レッグルーム・シート」や、乗り降りがしやすい「アップ・<br />
              フロントシートなどのオプション(有料) も選択可能! また、<br />
              機内メニュー「Jetstar Cafe」では幅広いメニューをスタン<br />
              バイ。 選べるオプションで自分らしい空の旅を叶えよう!
            </div>
          </div>

        </div>
      </div>

      {/* Screen 3 */}
      <div className="screen_3 flex justify-center">
        <div className='w-screen'>
          <div className="box text-white bg-[#25b7aa] flex flex-col md:flex-row p-4 mt-10 md:w-[60%] w-[90%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col justify-center items-center md:w-[40%] pb-5 md:pb-0'>
              <div className='text-bold text-3xl mb-2 text-center '>Tokyo mizumachi</div>
              <div className='font-bold md:text-5xl sm:text-lg'>東京ミズマチ &#174;</div>
            </div>
            <div className='md:w-[60%]  xcstm:text-[8px] border-t-2 md:border-t-0 border-white md:border-l-2 md:border-white md:pl-5 pl-0 font-bold text-[0.60rem] md:text-[16px]'>
              <div>2020年開業。 浅草~東京スカイツリータウン・エリアを散策できる</div>
              <div>新机点。</div>
              <div>カフェ・雑貨・ホステルなど個性豊かなお店が集結</div>
            </div>
          </div>

          <div className="box flex flex-col md:flex-row p-4 mt-10 md:w-[60%] w-[90%] mx-auto cstm:w-[80%] lg:w-[40%] max-w-6xl">
            <div className='flex flex-col  md:w-[60%]'>
              <div className="part1 p-2 text-sm md:text-2xl text-[#25b7aa] font-bold border-b-4 border-[#25b7aa]">
                東京スカイツリー® の近く
                <br /> 地域に根付いた下町の魅力に出会える場所
              </div>
              <div className="part2 text-black font-bold p-2 mt-4 text-[0.60rem] md:text-lg">
                夜はスカイツリーのライティングを眺めることができる。<br />
                ライティングスケジュールはスカイツリー公式HPをチェック。
              </div>
              <div className="part3 flex p-2 justify-between mt-5">
                <div>
                  <div className='text-[#25b7aa] font-bold'>●東京ミズマチ</div>
                  <div className='text-black font-bold'>東京都墨田区向島1</div>
                  <div className='text-black font-bold'>※各店舗にお問合せください</div>
                  <div className='text-black font-bold'>W1@tokyo_mizumachi</div>
                </div>

                <div className='relative'>
                  <img src={small_building} alt="tower" />
                  <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                </div>
              </div>
            </div>

            <div className='md:w-[40%] relative border-l-2 border-white pl-5 font-bold text-lg mt-10 md:mt-0'>
              <img src={big_building} alt="building" />
              <div className="absolute -top-6 -right-10 w-[200px]  lg:right-[40%]">

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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 4 */}
      <div className="screen_4 flex justify-center mt-[20px] ">

        <div className='w-screen'>
          <div className="box flex flex-col md:flex-row p-4 lg:mt-0 md:w-[60%] w-[90%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col md:w-[60%]'>
              <div className='relative border-l-2 border-white pl-5 font-bold text-lg'>
                <img src={s4girl} alt="building" className='p-4' />
                <img src={s4ideabox} alt="ideabox" className='absolute left-2 top-[25%] w-[120px] md:w-[180px]' />
                <div className="absolute -top-6 -left-10 w-[200px]">
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
                </div>
              </div>


              <div className='relative mt-10 mx-auto'>
                <img src={s4land} alt="tower" />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%]'>
              <div className="part1 p-1 text-3xl text-[#25b7aa] xcstm:text-sm font-bold border-b-4 border-[#25b7aa]">
                下町と新しい文化を融合した<br />
                カジュアルダイニング
              </div>
              <div className="part2 text-black text-[0.7rem] font-bold p-1 mt-4 xcstm:text-[0.4rem]">
                自家農園の野菜や産地にこだわった食材で作る料理が人気。テイクアウトで <br />
                きるデリや、テラスでBBQなど、さまざまな楽しみ方ができるのもGood
              </div>
              <div className="part3 flex p-1 justify-between mt-5 text-[0.8rem]">
                <div>
                  <div className='text-[#25b7aa] font-bold'>●LAND A</div>
                  <div className='text-black'>東京都墨田区向島1-2-4</div>
                  <div className='text-black'>03-5637-0107</div>
                  <div className='text-black'>営/平日 9:00~20:00 <br />土日祝9:00~20:00</div>
                  <div className='text-black'>休/不定休</div>
                  <div className='text-black'>@land_a_mizumachi</div>
                </div>

                <div className='relative'>
                  <img src={s4lunch} alt="tower" />
                  <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-0.5 rotate-[20deg] left-[35%] z-10'> </div>
                </div>

                <div className="absolute bg-[#25b7aa] bottom-12 text-sm font-bold text-white p-3 lg:bottom-40 lg:left-28 xcstm:text-xs xcstm:-bottom-24">
                  <div className='mb-1'>プロシュートと丸ごとブッラータ</div>
                  <div className='mb-1'>チーズのビアンカビッツァ (3,500円)</div>
                  <div className='mb-1'>LAND特製コブサラダ(R-1,800円)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Screen 5 */}
      <div className="screen_5   flex justify-center mt-[20px]">
        <div className='w-screen'>

          <div className="box flex  md:flex-row flex-col-reverse p-4 mt-10 w-[90%] md:w-[60%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col  md:w-[60%]'>
              <div className="part1 p-2 text-3xl text-[#25b7aa] font-bold border-b-4 border-[#25b7aa] xcstm:text-sm">
                墨田区の魅力を発見できる<br />
                ショップ&ワークショップの店
              </div>
              <div className="part2 text-black font-semibold p-2 mt-4 text-[15px] xcstm:text-[0.45rem]">
                墨田区が運営するこちら。 1階では「すみだモダン」認証商品をはじめ墨 <br />
                田区内の事業者が作った工芸品や雑貨を販売。 2階ではものづくり体験 <br />
                イベントが行われることも。
              </div>
              <div className="part3 flex flex-col md:flex-row p-2 justify-between mt-5 xcstm:text-xs">
                <div>
                  <div className='text-[#25b7aa] font-bold text-[15px]'>●SHOP & WORKSHOP すみずみ</div>
                  <div className='text-black '>東京都墨田区向島 1-23-9</div>
                  <div className='text-black '>03-6284-1731</div>
                  <div className='text-black '>11:00-19:00</div>
                  <div className='text-black '>休/月曜(祝日の場合は翌日)</div>
                  <div className='text-black '>@shopandworkshopsumizumi</div>
                </div>


                <div className='relative md:translate-x-16 z-20 mt-5 md:mt-0'>
                  <img src={s5girl} alt="tower" />
                  <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                </div>
              </div>
            </div>

            <div className='md:w-[40%] relative  pl-5 font-bold text-lg md:mt-0 mt-10 max-w-6xl'>
              <img src={s5shop} alt="building" />
              <div className="absolute -top-6 -right-10 w-[200px]">

                <div className='bg-[#fbee17] flex h-[80px]'>

                  <div className='w-2/5 flex relative'>
                    <div className='relative w-[65%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                      <div className='text-xs'>スポット</div>
                      <div className='text-2xl'>03</div>
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
              </div>

              <div className='relative float-right mt-7'>
                <img src={s5door} alt="tower" />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Screen 6 */}
      <div className="screen_6 flex justify-center mt-[5px] ">

        <div className='w-screen'>
          <div className="box text-white bg-[#f5ac1a] flex flex-col md:flex-row p-4 w-[60%] mx-auto cstm:w-[80%] xcstm:w-[90%] max-w-6xl">
            <div className='flex flex-col justify-center items-center md:w-[40%] pb-5 md:pb-0'>
              <div className='text-bold text-3xl mb-2'>Shibuya</div>
              <div className='font-bold text-5xl'>渋谷</div>
            </div>
            <div className='md:w-[60%] border-t-2 md:border-t-0 border-white md:border-l-2 md:border-white md:pl-5 pl-0 font-bold text-md xcstm:text-[0.53rem] nokn:text-xs'>
              若者や外国人観光客が集まる流行の発信地・渋谷で、東京の“いま” <br />
              を体感!
            </div>
          </div>

          <div className="box flex flex-col md:flex-row p-4 mt-10 md:w-[60%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col md:w-[60%]'>
              <div className='relative  font-bold text-lg'>
                <img src={s6girl} alt="" className='p-4' />
                <img src={s6text} alt="text" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                {/* <img src={s6border} alt="text" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}
                <div className="absolute -top-6 -left-10 w-[230px]">
                  <div className='bg-[#fbee17] flex h-[80px]'>
                    <div className='w-2/5 flex relative'>
                      <div className='relative w-[53%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                        <div className='text-xs'>スポット</div>
                        <div className='text-2xl'>01</div>
                        <div className="arrow-up absolute bottom-0"></div>
                      </div>
                      <div className="arrow-down absolute -bottom-2.5 -right-28"></div>
                    </div>
                    <div className='w-3/5 flex items-center'>
                      <div className='font-bold text-xl'>
                        <div>SHIBUYA SKY</div>
                        <div>(渋谷スカイ)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className='relative mt-2 mx-auto'>
                <img src={s6smallimg} alt="tower" />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%]'>
              <div className="part1 p-1 text-3xl text-[#f7aa17] font-bold border-b-4 border-[#f7aa17] xcstm:text-sm">
                ありとあらゆるものが集まる <br />
                渋谷の最新スポットを巡る
              </div>
              <div className="part2 text-black text-[0.8rem] font-bold p-1 mt-4 xcstm:text-[0.54rem]">
                2019年に開業した『渋谷スクランブルスクエア」にある展望施設「 <br />
                SHIBUYASKY」は、街を一望できる絶景スポット。 屋内展望回廊 「SKY- <br />
                GALLERY」では映像による空間演出や期間限定の展示が楽しめる。
              </div>
              <div className="part3 flex flex-col md:flex-row p-1 justify-between mt-5 text-[1.1rem]">
                <div>
                  <div className='text-[#f5ac1a] font-bold'>●SHIBUYA SKY (渋谷スカイ)</div>
                  <div className='text-black font-bold'>東京都渋谷区2-24-12 (渋谷駅直結・直上)</div>
                  <div className='text-black font-bold'>03-4221-0229 (10:00-20:00)</div>
                  <div className='text-black font-bold'>営/ 10:00~22:30 (最終入場21:20) <br />
                    ※屋外は悪天時閉鎖</div>
                  <div className='text-black font-bold'>休/無休</div>
                  <div className='text-black font-bold'>料/大人2,000円、中高生1,600円、 <br />
                    小学生1,000円、幼児600円</div>
                </div>

                <div className='absolute z-20 md:-bottom-12 md:right-0 -bottom-52 right-0 text-sm font-bold text-white p-3'>
                  <img src={s6cupimg} alt="tower" />
                </div>

                <div className="absolute bg-[#f5ac1a] md:-bottom-12 md:right-56 -bottom-[240px] right-48 text-sm font-bold text-white p-3">
                  <div className='mb-1'>渋谷のシンボル</div>
                  <div className='mb-1'>忠犬ハチ公」の</div>
                  <div className='mb-1'>グッズがズラリ!</div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Screen 7 */}
      <div className="screen_7 flex justify-center mt-[80px]">
        <div className='w-screen'>
          <div className="box flex flex-col md:flex-row p-4 mt-36 md:w-[60%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col  md:w-[60%]'>
              <div className="part1 p-2 text-3xl text-[#f7aa17] font-bold border-b-4 border-[#f7aa17] xcstm:text-xs">
                公園・商業施設・ホテルが融合した <br />
                渋谷の新たなランドマーク
              </div>
              <div className="part2 text-black font-bold p-2 mt-4 xcstm:text-[0.5rem] nokn:text-[0.6rem]">
                2020年、 渋谷区立宮下公園が新しく生まれ変わり、ショッピングや食べ歩き、スポーツが <br />
                楽しめる低層複合施設に。
              </div>
              <div className="part3 p-2  mt-5 xcstm:text-sm xcstm:mb-8">
                <div>
                  <div className='text-[#f7aa17] font-bold'>●MIYASHITA PARK</div>
                  <div className='text-black font-bold'>東京都渋谷区神宮前6-20-10</div>
                  <div className='text-black font-bold'>03-6712-5630 (1) <br /> (受付 11:00~18:00)</div>
                  <div className='text-black font-bold'>{"@@miyashitapark_"}</div>
                </div>


              </div>
            </div>

            <div className='md:w-[40%] relative border-l-2 border-white pl-5 font-bold text-lg'>
              <img src={s7park} alt="building" />
              <div className="absolute -top-6 -right-10 w-[200px]">

                <div className='bg-[#fbee17] flex h-[80px]'>

                  <div className='w-2/5 flex relative'>
                    <div className='relative w-[65%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                      <div className='text-xs'>スポット</div>
                      <div className='text-2xl'>02</div>
                      <div className="arrow-up absolute bottom-0"></div>
                    </div>
                    <div className="arrow-down absolute -bottom-1.5 left-2"></div>

                  </div>

                  <div className='w-3/5 flex items-center'>

                    <div className='font-bold text-lg'>
                      <div>MIYASHITA </div>
                      <div>PARK</div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Screen 8 */}
      <div className="screen_8 flex justify-center mt-[0px] ">

        <div className='w-screen'>

          <div className="box flex flex-col md:flex-row p-4 mt-10 md:w-[60%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col md:w-[60%]'>
              <div className='relative  font-bold text-lg'>
                <img src={s8girl} alt="" className='p-4' />
                {/* k<img src={s6border} alt="text" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}
                <div className="absolute -top-6 -left-10 w-[230px]">
                  <div className='bg-[#fbee17] flex h-[80px]'>
                    <div className='w-2/5 flex relative'>
                      <div className='relative w-[53%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                        <div className='text-xs'>スポット</div>
                        <div className='text-2xl'>03</div>
                        <div className="arrow-up absolute bottom-0"></div>
                      </div>
                      <div className="arrow-down absolute -bottom-2.5 -right-28"></div>
                    </div>
                    <div className='w-3/5 flex items-center'>
                      <div className='font-bold md:text-md xcstm:text-[0.8rem]'>
                        <div>パンとエスプレッソと <br />
                          まちあわせ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className='relative mt-2 mx-auto'>
                <img src={s8note} alt="tower" />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%]'>
              <div className="part1 p-1 text-3xl text-[#f7aa17] font-bold border-b-4 border-[#f7aa17]">
                パンとコーヒーで <br />
                素敵なカフェタイムを
              </div>
              <div className="part2 text-black md:text-[0.7rem] font-bold p-1 mt-4 xcstm:text-[0.5rem]">
                「パンとエスプレッソと』 の姉妹店。 こだわり卵を使った限定料理が味わえ <br />
                るのはここだけ。 1日の始まりと終わりに足を運んでみて。
              </div>
              <div className="part3 flex p-1 justify-between mt-5 text-[0.8rem]">
                <div>
                  <div className='text-[#f5ac1a] font-bold'>●パンとエスプレッソとまちあわせ</div>
                  <div className='text-black font-bold'>東京都渋谷区神宮前6-20-10</div>
                  <div className='text-black font-bold'>MIYASHITA PARK South2F</div>
                  <div className='text-black font-bold'>03-6805-0830</div>
                  <div className='text-black font-bold'>8:00~23:00 <br />
                    (フードLO20:30、 その他LO22:00)</div>
                  <div className='text-black font-bold'>休/施設に準ずる</div>
                  <div className='text-black font-bold'>{"@@bread.espresso.and.machiawase"}</div>
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
                <img src={s8bread} alt="coffee" className='z-10 absolute left-0 xcstm:w-[190px] nokn:w-[240px] md:left-8' />
                <div className="absolute bg-[#f5ac1a] -bottom-20 left-[50%] z-0 text-sm font-bold text-white p-6">
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
      <div className="screen_9 flex justify-center mt-[0px]">
        <div className='w-screen'>
          <div className="box flex flex-col md:flex-row p-4 mt-32 md:w-[60%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col  md:w-[60%]'>
              <div className="part1 p-2 text-3xl text-[#f3bc3c] font-bold border-b-4 border-[#f3bc3c]">
                渋谷区民のみならず <br />
                多くの来街者に親しまれている場所
              </div>
              <div className="part2 text-black font-bold p-2 mt-4 text-[0.9rem]">
                芝生ひろばをはじめ、ボルダリングウォール・スケート場・多目的運動施設 <br />
                (サンドコート)を併設。
              </div>
              <div className="part3 flex flex-col md:flex-row p-2 justify-between mt-5">
                <div>
                  <div className='text-[#f3bc3c] font-semibold'>●渋谷区立宮下公園</div>
                  <div className='text-black font-semibold'>東京都渋谷区神宮前1-26-5</div>
                  <div className='text-black font-semibold'>03-6712-5291</div>
                  <div className='text-black font-semibold'>営/ (公園) 8:00~23:00 <br />
                    (スポーツ施設) 9:00~22:00 <br />
                    (受付は21:30まで)</div>
                  <div className='text-black font-semibold'>/年末年始</div>
                </div>


                <div className='relative translate-x-16 z-20 xcstm:translate-x-2 md:translate-x-0'>
                  <img src={s9leftbuilding} alt="tower" />
                  <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                </div>


              </div>
            </div>

            <div className='md:w-[40%] relative xcstm:mt-10 md:mt-0  pl-5 font-bold text-lg'>
              <img src={s9rightbuilding} alt="building" />
              <div className="absolute -top-6 -right-10 w-[260px]">

                <div className='bg-[#fbee17] flex h-[80px]'>

                  <div className='w-2/5 flex relative'>
                    <div className='relative w-[47%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                      <div className='text-xs'>スポット</div>
                      <div className='text-2xl'>04</div>
                      <div className="arrow-up absolute bottom-0"></div>
                    </div>
                    <div className="arrow-down absolute -bottom-1.5 left-2"></div>

                  </div>

                  <div className='w-3/5 flex items-center'>

                    <div className='font-bold md:text-md xcstm:text-sm'>
                      <div>渋谷区立宮下公園</div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Screen 10 */}
      <div className="screen_10  flex justify-center mt-[0px]">

        <div className='w-screen'>

          <div className="box flex flex-col md:flex-row p-4 mt-10 md:w-[60%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col md:w-[60%] xcstm:w-[90%]'>
              <div className='relative  font-bold text-lg'>
                <img src={s10storefront} alt="storefront_image" className='p-4' />
                {/* <img src={s6border} alt="text" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}
                <div className="absolute -top-6 -left-10 w-[300px]">
                  <div className='bg-[#fbee17] flex h-[80px]'>
                    <div className='w-2/5 flex relative'>
                      <div className='relative w-[40%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                        <div className='text-xs'>スポット</div>
                        <div className='text-2xl'>05</div>
                        <div className="arrow-up absolute bottom-0"></div>
                      </div>
                      <div className="arrow-down absolute -bottom-2.5 -right-28"></div>
                    </div>
                    <div className='w-3/5 flex items-center justify-start'>
                      <div className='font-bold text-xl '>
                        <div>GRAN SOL TOKYO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%]'>
              <div className="part1 p-1 md:text-3xl xcstm:text-sm text-[#f7aa17] font-bold border-b-4 border-[#f7aa17]">
                出店!世界一の <br />
                ピンチョスが楽しめるバル
              </div>
              <div className="part2 text-black md:text-[0.7rem] xcstm:text-[0.45rem] font-bold p-1 mt-4">
                「世界ピンチョス・タパスコンクールでチャンピオンに輝いた名店「GRAN- SOL」<br />
                の日本1号店 3周年を記念し、東京オリジナルピンチョスが登場予
                <br /> 定!
              </div>
              <div className="part3 flex p-1 justify-between mt-5 xcstm:text-[0.6rem] md:text-[0.8rem]">
                <div>
                  <div className='text-[#f5ac1a] font-bold'>●GRAN SOL TOKYO</div>
                  <div className='text-black font-bold'>東京都渋谷区神宮前6-20-10</div>
                  <div className='text-black font-bold'>MIYASHITA PARK North3F</div>
                  <div className='text-black font-bold'>03-5468-3378</div>
                  <div className='text-black font-bold'>営/11:00~23:00 (フードLO22:00 ドリンクLO22:30)</div>
                  <div className='text-black font-bold'>体/施設に準ずる</div>
                  <div className='text-black font-bold'>{"@gransol shibuya"}</div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-4 md:mt-5 md:w-[60%] xcstm:w-[90%] mx-auto justify-center md:translate-x-20 xcstm:mt-10">

            <div className='relative'>
              <div className="bg-[#f5ac1a] absolute -z-10 md:text-sm xcstm:text-xs xcstm:-left-30 xcstm:-top-14 md:-top-10 md:-left-32 font-bold text-white p-3">
                <div className='mb-1'>金賞受賞 <br />
                  ピンチョスチェリーベルツ <br />
                  (980円)
                </div>
              </div>
              <img src={s10leftfood} alt="foodimage" className='translate-x-10 z-10' />
              <div className='w-[80px] opacity-90 h-[25px] bg-[rgb(242,214,36)] absolute -top-1 rotate-[20deg] left-[45%] z-10'> </div>
            </div>
            <div className='relative'>
              <div className=''>
                <img src={s10rightfood} alt="foodimage" className=' -translate-y-16' />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Screen 11 */}
      <div className="screen_11  flex justify-center mt-[20px]">
        <div className='w-screen'>
          <div className="box text-white bg-[#00afde] flex flex-col md:flex-row p-4 mt-8 md:w-[60%] xcstm:w-[90%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col justify-center items-center md:w-[40%] xcstm:w-[90%] xcstm:pb-3 md:pb-0'>
              <div className='text-bold md:text-3xl xcstm:text-2xl mb-2 xcstm:text-center'>Kiyosumishirakawa</div>
              <div className='font-bold text-5xl'>清澄白河</div>
            </div>
            <div className='md:w-[60%] xcstm:w-[90%] md:border-l-2 xcstm:border-t-2 md:border-t-0 border-white md:pl-5 xcstm:pl-0 font-bold xcstm:text-[0.65rem] xcstm:pt-2 md:pt-0 md:text-lg'>
              "コーヒーの街として話題沸騰中の清澄白河。
              <br /> 自然やアートにも触れられるスポットにも注目!
            </div>
          </div>

          <div className="box flex flex-col md:flex-row p-4 mt-5 md:w-[60%] mx-auto cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col  md:w-[60%]'>
              <div className="part1 p-2 md:text-3xl xcstm:text-xl text-[#00afde] font-bold border-b-4 border-[#00afde]">
                コーヒーをもっと好きになる <br />
                ここにしかない新しい体験
              </div>
              <div className="part2 text-black font-bold p-2 mt-4 md:text-[15px] xcstm:text-[8px]">
                世界各国から厳選したロースターの豆を扱うコーヒー専門店。豆の産地 <br />
                や品種の違い、ローストの違いをコース仕立てで体感することができる。
              </div>
              <div className="part3 flex p-2 justify-between mt-5">

                <div className='relative'>
                  <img src={s11cupimage} alt="cupimage" />
                  <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                  <div className="bg-[#00afde] absolute -z-10 text-sm xcstm:-bottom-20 md:-bottom-3 md:-right-44 xcstm:-right-0  font-bold text-white p-4">
                    <div className='mb-1'>Koffee Mameya Course <br /> コーヒーマメヤコース <br /> (3,000円)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-[40%] relative border-l-2 border-white pl-5 xcstm:mt-28 md:mt-0 font-bold text-lg'>
              <img src={s11manwoman} alt="couple_date" />
              <img src={s11ideabox} alt="ideabox" className='md:scale-90 xcstm:scale-50 absolute top-16 md:-right-28 xcstm:-right-20' />
              <div className="absolute -top-6 -right-10 w-[300px]">

                <div className='bg-[#fbee17] flex h-[80px]'>

                  <div className='w-1/5 flex relative'>
                    <div className='relative w-[82%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                      <div className='text-xs'>スポット</div>
                      <div className='text-2xl'>01</div>
                      <div className="arrow-up absolute bottom-0"></div>
                    </div>
                    <div className="arrow-down absolute -bottom-1.5 left-2"></div>

                  </div>

                  <div className='w-4/5 flex items-center'>

                    <div className='font-bold text-xl'>
                      01 KOFFEE MAMEYA <br />
                      -Kakeru-
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="box2 flex flex-col md:flex-row justify-between p-4 mx-auto md:w-[60%] max-w-6xl">
            <div className=''>
              <div className="part2 text-black text-[10px] font-bold p-1 mb-4">
                築50年ほどの倉庫をリノベーションした店舗、能の舞台を彷彿させ <br />
                るような凛としたおしゃれな空間が広がる。
              </div>
              <div className='text-[#00afde] font-bold'>●KOFFEE MAMEYA-Kakeru-</div>
              <div className='text-black font-bold'>東京都江東区平野2-16-14</div>
              <div className='text-black font-bold'>03-6240-3072 (予約優先)</div>
              <div className='text-black font-bold'>/11:00-19:00</div>
              <div className='text-black font-bold'>休/無休</div>
              <div className='text-black font-bold'>@@@koffee_mameya_kakeru</div>
            </div>

            <div className="image_part flex justify-center items-center xcstm:translate-y-20 md:translate-y-0">
              <div className='relative translate-x-10'>
                <img src={s11downleft} alt="leftimage" className='' />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>

              <div className='relative -translate-y-14'>
                <img src={s11downright} alt="rightimage" className='' />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
              </div>

            </div>
          </div>



        </div>
      </div>

      {/* Screen 12 */}
      <div className="screen_12  justify-center mt-[20px]">

        <div className='w-screen'>

          <div className="box flex flex-col md:flex-row p-4 xcstm:mt-20 md:mt-10 md:w-[60%] mx-auto xcstm:w-[90%] cstm:w-[80%] max-w-6xl">
            <div className='flex flex-col md:w-[60%]'>
              <div className='relative  font-bold xcstm:text-sm md:text-lg'>
                <img src={s12coffee} alt="storefront_image" className='p-4' />
                <img src={s12ideabox} alt="text" className='absolute md:-left-20 xcstm:-left-10 top-20 xcstm:w-[100px] md:w-[150px]' />
                {/* <img src={s6border} alt="text" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}
                <div className="p-2 text-white xcstm:text-xs md:text-sm font-semibold rounded-sm bg-[#00aee0] absolute xcstm:bottom-6 md:bottom-10 xcstm:left-12 md:left-16">
                  フラットホワイト (490円) <br />
                  バナナケーキ (500円)
                </div>

                <div className="absolute -top-6 md:-left-10 xcstm:-left-5 w-[300px]">
                  <div className='bg-[#fbee17] flex h-[80px]'>
                    <div className='w-1/5 flex relative'>
                      <div className='relative w-[80%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                        <div className='text-xs'>スポット</div>
                        <div className='text-2xl'>02</div>
                        <div className="arrow-up absolute bottom-0"></div>
                      </div>
                      <div className="arrow-down absolute -bottom-2.5 -right-28"></div>
                    </div>
                    <div className='w-4/5 flex items-center'>
                      <div className='font-bold xcstm:text-md md:text-xl'>
                        <div>Allpress Espresso Tokyo <br />
                          Roastery & Cafe </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='flex flex-col relative  md:w-[60%]'>
              <div className="part1 p-1 md:text-3xl xcstm:text-sm text-[#00aee0] font-bold border-b-4 border-[#00aee0]">
                明るく開かれた心地よい空間で <br />
                美味しいコーヒーとの出会いを
              </div>
              <div className="part2 text-black xcstm:text-[0.45rem] md:text-[0.8rem] font-bold p-1 mt-4">
                ニュージーランド発のロースター&カフェ、2022年4月に、 店舗&メニュー <br />
                をリニューアル。 焙煎士との距離が近いので、好みの味を探したい方はぜ <br />
                ひ。
              </div>
              <div className="part3 flex p-1 justify-between mt-5 xcstm:text-sm md:text-[1rem]">
                <div>
                  <div className='text-[#00aee0] font-bold'>●Allpress Espresso Tokyo Roastery&Cafe</div>
                  <div className='text-black font-bold'>東京都江東区平野3-7-2</div>
                  <div className='text-black font-bold'>03-5875-9131</div>
                  <div className='text-black font-bold'>9:00-17:00</div>
                  <div className='text-black font-bold'>休/無休</div>
                  <div className='text-black font-bold'>{"@allpressespressojapan"}</div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-4 mt-8 md:w-[60%] mx-auto justify-center">

            <div className='relative mr-5 -translate-y-10'>
              <img src={s12pouringcoffee} alt="foodimage" className='' />
              <div className='w-[80px] opacity-90 h-[25px] bg-[rgb(242,214,36)] absolute -top-1 rotate-[20deg] left-[45%] z-10'> </div>
            </div>
            <div className='relative'>

              <img src={s12coffeeshop} alt="foodimage" className=' ' />
              <div className='w-[80px] opacity-90 h-[25px] bg-[rgb(242,214,36)] absolute -top-1 rotate-[20deg] left-[45%] z-10'> </div>

            </div>
          </div>

        </div>

      </div>

      {/* Screen 13 */}
      <div className="screen_13 h-screen flex justify-center cstm:mt-[150px]">
        <div className='w-screen'>

          <div className="box flex p-4 mt-48 w-[60%] mx-auto cstm:w-[80%]">
            <div className='flex flex-col  w-[60%]'>
              <div className="part1 p-2 text-3xl text-[#00afde] font-bold border-b-4 border-[#00afde]">
                アートを身近に感じられる <br /> 清澄白河のランドマーク
              </div>
              <div className="part2 text-black text-[0.8rem] font-bold p-2 mt-4">
                豊かな木場公園内にある現代美術専門の美術館図書室には「こども <br />
                としょしつ」、エントランスや中庭にはベンチがあり、寛ぐことができる。 ア <br />
                ートに触れて、心安らぐひと時を
              </div>
              <div className="part3 flex p-2 justify-between mt-5">
                <div>
                  <div className='text-[#00aee0] font-bold'>●東京都現代美術館</div>
                  <div className='text-black font-bold'>東京都江東区三好4-1-1 (木場公園内)</div>
                  <div className='text-black font-bold'>閉館/10:00~18:00 (展示室入室は17:30まで)</div>
                  <div className='text-black font-bold'>休/月曜(祝日の場合は翌平日) <br />
                    展示入替期間、年末年始は休館</div>
                  <div className='text-black font-bold'>/入館のみは無料観覧料は展覧会により異なる</div>

                </div>
              </div>
            </div>

            <div className='w-[40%] relative border-l-2 border-white pl-5 font-bold text-lg'>
              <div className='relative'>
                <img src={s13corridor} alt="couple_date" />
                <div className='text-black font-semibold text-xs text-center absolute bottom-1 w-full'>写真:アンソニー・カロ〈発見の塔 1991年</div>
              </div>

              <div className="absolute -top-6 -right-10 w-[300px]">

                <div className='bg-[#fbee17] flex h-[80px]'>

                  <div className='w-1/5 flex relative'>
                    <div className='relative w-[80%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                      <div className='text-xs'>スポット</div>
                      <div className='text-2xl'>03</div>
                      <div className="arrow-up absolute bottom-0"></div>
                    </div>
                    <div className="arrow-down absolute -bottom-1.5 left-2"></div>
                  </div>

                  <div className='w-4/5 flex items-center'>

                    <div className='font-bold text-2xl'>
                      東京都現代美術館
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box2 flex justify-between p-4 mx-auto w-[60%]">
            <div className='mt-20'>
              <img src={s13bluebox} alt="bluebox" />
            </div>

            <div className="image_part flex justify-center items-center">
              <div className='relative translate-x-10 -translate-y-20'>
                <img src={s13moplus} alt="leftimage" className='' />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                <div className='text-black text-xs font-semibold text-center'>Photo Kenta Hasegawa</div>
              </div>

              <div className='relative '>
                <img src={s13officeroom} alt="rightimage" className='' />
                <div className='w-[80px] opacity-80 h-[25px] bg-[#fee33d] absolute -top-1 rotate-[20deg] left-[35%] z-10'> </div>
                <img src={s13ideabox} alt="ideabox" className='absolute -right-28 -top-10' />
                <div className='text-black text-xs font-semibold text-center'>ミュージアムショップ「NADiff contemporary」</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Screen 14 */}
      <div className="screen_14  flex justify-center cstm:mt-[150px]">

        <div className='w-screen'>
          <div className="box text-white bg-[#ee798c] flex p-4 mt-32 w-[60%] mx-auto cstm:w-[80%]">
            <div className='flex flex-col justify-center items-center w-[40%]'>
              <div className='text-bold text-3xl mb-2'>Shimokitazawa</div>
              <div className='font-bold text-5xl'>下北沢</div>
            </div>
            <div className='w-[60%] border-l-2 border-white pl-5 font-bold text-md'>
              小田急線線路跡の開発が進み、変化がめまぐるしい下北沢、新しい <br />
              発見がある“街ぶら”に最適なエリア。
            </div>
          </div>

          <div className="box flex p-4 mt-10 w-[60%] mx-auto cstm:w-[80%]">
            <div className='flex flex-col w-[50%]'>
              <div className='relative  font-bold text-lg'>
                <img src={s14library} alt="" className='p-4' />
                {/* <img src={s6border} alt="text" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}
                <div className="absolute -top-6 -left-10 w-[230px]">
                  <div className='bg-[#fbee17] flex h-[80px]'>
                    <div className='w-2/5 flex relative'>
                      <div className='relative w-[53%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                        <div className='text-xs'>スポット</div>
                        <div className='text-2xl'>01</div>
                        <div className="arrow-up absolute bottom-0"></div>
                      </div>
                      <div className="arrow-down absolute -bottom-2.5 -right-28"></div>
                    </div>
                    <div className='w-3/5 flex items-center'>
                      <div className='font-bold text-2xl'>
                        本屋 B&B
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="part1 p-1 text-[1.4rem] text-[#ee798c] font-bold border-b-4 border-[#ee798c] mt-24">
                新しい出会いや感性が刺激される<br />
                カルチャーの発信地!
              </div>
              <div className="part2 text-black text-[0.7rem] font-bold p-1 mt-4">
                2020年 「下北線路街」 の一角にOPEN。 個性豊かな13のお店が軒を <br />
                重ね、小さな街を形成、不定期で開催されるイベントもCheck!
              </div>
              <div className="part3 flex p-1 justify-between mt-5 text-[0.7rem]">
                <div>
                  <div className='text-[#ee798c] font-bold'>●BONUS TRACK</div>
                  <div className='text-black font-bold'>東京都世田谷区代田2-36-12~15</div>
                  <div className='text-black font-bold'>※各店舗へお問合せください</div>
                  <div className='text-black font-bold'>{"@bonustrack_skz"}</div>
                </div>
              </div>
            </div>

            <div className='flex flex-col relative  w-[60%]'>
              <div className="part1 p-1 text-3xl text-[#ee798c] font-bold border-b-4 border-[#ee798c]">
                人と本がつながる場所
              </div>
              <div className="part2 text-black text-[0.8rem] font-bold p-1 mt-4">
                店名の「B&B」は “BOOKS & BEER"の略で、本はもちろん、アルコール <br />
                や こだわりのコーヒーも購入できる。独自のセレクションによる本棚から、<br />
                あ なたが気になる一冊を見つけて。
              </div>
              <div className="part3 flex p-1 justify-between mt-5 text-[0.7rem]">
                <div>
                  <div className='text-[#ee798c] font-bold'>●本屋 B&B</div>
                  <div className='text-black font-bold'>東京都世田谷区代田2-36-15</div>
                  <div className='text-black font-bold'>BONUS TRACK 2F</div>
                  <div className='text-black font-bold'>03-6450-8272</div>
                  <div className='text-black font-bold'>11:00-21:00 <br /> (日によって変動あり)</div>
                  <div className='text-black font-bold'>休/無休(年末年始および <br /> 特別な場合を除く)</div>
                  <div className='text-black font-bold'>{"@books_and_beer_"}</div>

                </div>

                <div>
                  <img src={s14outdoorstairs} alt="outdoorstairs" className='w-[80%]' />
                </div>
              </div>

              <div className='relative mt-10'>
                <div className='relative flex justify-center'>
                  <img src={s14girloutdoor} alt="couple_date" className='w-[80%]' />
                  {/* <img src={s6border} alt="text" className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}
                </div>

                <div className="absolute -top-6 -right-10 w-[250px]">

                  <div className='bg-[#fbee17] flex h-[80px]'>

                    <div className='w-2/5 flex relative'>
                      <div className='relative w-[50%] mx-auto h-[60px] bg-black text-white flex flex-col justify-center items-center'>
                        <div className='text-xs'>スポット</div>
                        <div className='text-2xl'>02</div>
                        <div className="arrow-up absolute bottom-0"></div>
                      </div>
                      <div className="arrow-down absolute -bottom-1.5 left-2"></div>
                    </div>

                    <div className='w-3/5 flex items-center'>

                      <div className='font-bold text-xl'>
                        BONUS TRACK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center p-2'>
        <button className='mx-auto w-[40%] bg-[#ef7625] rounded-sm cursor-pointer text-center text-xl text-white py-2'>高松成田線のお得な情報はこちら</button>
      </div>

      <div className='flex justify-center p-7 bg-[#212121] mt-7'>
        <div className="text-center text-white p-3 text-sm">Copyright(C)2022 All rights reserved.</div>
      </div>



    </div>
  );
}

export default App;
