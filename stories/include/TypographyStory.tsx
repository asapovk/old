import React, { Fragment } from 'react';
import { Button, Flexbox, Title, Styles } from '../../src';

export default class Story extends React.Component {
    render() {
        const linesTSX = (color) => {
            let lines = [] as JSX.Element[];
            for (let i = 0; i < 180; i++) {
                lines.push(<p style={{ background: color, marginTop: i === 0 ? 0 : '1rem' }}>&nbsp;</p>)
            }
            return lines;
        }
        return (
            <Styles>
                {styles => (
                    <Flexbox p={40} mt={-40} alignItems='flex-start' justifyContent='center' style={{ position: 'relative', overflow: 'hidden' }}>
                        <article style={{ zIndex: 9999 }}>
                            <h1>Типографика пользовательского интерфейса</h1>
                            <p>Масштабируемая типографическая система для веб-разработки c вертикальной рифмовкой</p>
                            <h2>И десятеричное</h2>
                            <p>Всю ночь Бенедикт ловил мышей. Легко сказать: ловил. Дело это не простое, и, как и всякое дело, разумения требует. Оно только кажется, что вот, мол, – ты, и вот – мышь, так хватай ее. Не-е-е-е-ет.</p>
                            <p>Ловил он, конечно, удавочкой. Но! – ежели в подполе пусто, ежели мышь перебежала к кому побогаче, то тряси удавочкой, не тряси, – ничего не натрясешь. Мышь прикармливать нужно. Стало быть, все должно быть продумано загодя.</p>
                            <p>А бывает. Идет голубчик наощупь, в темноте-то, за получкой, – ан и в яму свалится, а не то сучком глаз выколет, а то поскользнется и ногу переломит, а то и заблудится, забредет в чужую слободу, а там его собаки злые порвут; упадет, да и замерзнет насмерть в сугробе-то. Все может быть.</p>
                            {/* <ul>
                                <li>That is not dead which can eternal lie</li>
                                <li>And with strange aeons even death may die.</li>
                            </ul> */}
                            <h3>Mystery derelict found at sea</h3>
                            <p><em>Vigilant</em> Arrives With Helpless Armed New Zealand Yacht in Tow. One Survivor and Dead Man Found Aboard. Tale of Desperate Battle and Deaths at Sea. Rescued Seaman Refuses Particulars of Strange Experience. Odd Idol Found in His
                        Possession. Inquiry to Follow.</p>
                            <p>The Morrison Co.'s freighter <em>Vigilant</em>, bound from Valparaiso, arrived this morning at its wharf in Darling Harbour, having in tow the battled and disabled but heavily armed steam yacht Alert of Dunedin, N.Z., which was sighted
                        April 12th in S. Latitude 34° 21', W. Longitude 152° 17', with one living and one dead man aboard.</p>
                            <h2>The Tale of Inspector Legrasse</h2>
                            <p>The older matters which had made the sculptor's dream and bas-relief so significant to my uncle formed the subject of the second half of his long manuscript. Once before, it appears, Professor Angell had seen the hellish outlines of the nameless
                                monstrosity, puzzled over the unknown hieroglyphics, and heard the ominous syllables which can be rendered only as "Cthulhu"; and all this in so stirring and horrible a connection that it is small wonder he pursued young Wilcox with queries
                    and demands for data.</p>
                            <p>This earlier experience had come in 1908, seventeen years before, when the American Archaeological Society held its annual meeting in St Louis. Professor Angell, as befitted one of his authority and attainments, had had a prominent part in
                    all the deliberations, and was one of the first to be approached by the several outsiders who took advantage of the convocation to offer questions for correct answering and problems for expert solution.</p>
                            <p>The chief of these outsiders, and in a short time the focus of interest for the entire meeting, was a commonplace-looking middle-aged man who had travelled all the way from New Orleans for certain special information unobtainable from any
                                local source. His name was John Raymond Legrasse, and he was by profession an inspector of police. With him he bore the subject of his visit, a grotesque, repulsive, and apparently very ancient stone statuette whose origin he was at a
                    loss to determine.</p>
                            <h2>The Madness from the Sea</h2>
                            <h3>In his house at R'lyeh dead Cthulhu waits dreaming.</h3>
                            <p>And now, in response to a general and urgent demand, Inspector Legrasse related as fully as possible his experience with the swamp worshippers; telling a story to which I could see my uncle attached profound significance. It savoured of the
                    wildest dreams of myth-maker and theosophist, and disclosed an astonishing degree of cosmic imagination among such half-castes and pariahs as might be least expected to possess it.</p>
                            <blockquote>
                                <p>Of such great powers or beings there may be conceivably a survival… a survival of a hugely remote period when… consciousness was manifested, perhaps, in shapes and forms long since withdrawn before the tide of advancing humanity… forms
                        of which poetry and legend alone have caught a flying memory and called them gods, monsters, mythical beings of all sorts and kinds&hellips;</p> <cite>—Algernon Blackwood</cite> </blockquote> <pre>
                                <code children={'.the-eye {color: midnight;}'} />
                            </pre>
                            <h4>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn</h4>
                            <p>Legrasse had one point in advance of Professor Webb, for several among his mongrel prisoners had repeated to him what older celebrants had told them the words meant. This text, as given, ran something like this:</p>
                            <h4>In his house at R'lyeh dead Cthulhu waits dreaming.</h4>
                            <p>And now, in response to a general and urgent demand, Inspector Legrasse related as fully as possible his experience with the swamp worshippers; telling a story to which I could see my uncle attached profound significance. It savoured of the
                    wildest dreams of <em>myth-maker</em> and <em>theosophist</em>, and disclosed an astonishing degree of cosmic imagination among such half-castes and pariahs as might be least expected to possess it.</p>
                            {/* <ol>
                                <li>1925—Dream and Dream Work of H. A. Wilcox, 7 Thomas St., Providence, R. I.</li>
                                <li>Narrative of Inspector John R. Legrasse, 121 Bienville St., New Orleans, La., at 1908 A. A. S. Mtg.—Notes on Same, & Prof. Webb's Acct.</li>
                                <li>Atlantis and the Lost Lemuria, W. Scott-Elliot</li>
                            </ol> */}
                            <p>On 1 November 1907, there had come to New Orleans police a frantic summons from the swamp and lagoon country to the south. The squatters there, mostly primitive but good-natured descendants of Lafitte's men, were in the grip of stark terror
                                from an unknown thing which had stolen upon them in the night. It was voodoo, apparently, but voodoo of a more terrible sort than they had ever known; and some of their women and children had disappeared since the malevolent tom-tom had
                                begun its incessant beating far within the black haunted woods where no dweller ventured. There were insane shouts and harrowing screams, soul-chilling chants and dancing devil-flames; and, the frightened messenger added, the people could
                    stand it no more.</p>
                            <h4>The Great Old Ones</h4>
                            <p>He talked of his dreams in a strangely poetic fashion; making me see with terrible vividness the damp Cyclopean city of slimy green stone—whose geometry, he oddly said, was all wrong—and hear with frightened expectancy the ceaseless, half-mental
                    calling from underground: <em>"Cthulhu fhtagn, Cthulhu fhtagn."</em></p>
                            {/* <hr />
                            <h1>Heading level 1</h1>
                            <h2>Heading level 2</h2>
                            <h3>Heading level 3</h3>
                            <h4>Heading level 4</h4>
                            <p>Paragraph with <b>bold</b>, <i>italic</i>, <a href="#top">link</a> and <code>code</code> styles.</p>
                            <blockquote>
                                <p>Blockquote text</p><cite>Citation</cite></blockquote>
                            <ol>
                                <li>Ordered list element one</li>
                                <li>Ordered list element two</li>
                                <li>Ordered list element three</li>
                            </ol>
                            <ul>
                                <li>Unordered list element one</li>
                                <li>Unordered list element two</li>
                                <li>Unordered list element three</li>
                            </ul> */}
                        </article>
                        <div
                            style={{ position: 'absolute', width: '100%' }}
                            children={linesTSX(styles.theme.pale.rgba(0.2))}
                        />
                    </Flexbox>
                )}
            </Styles>
        )
    }
}