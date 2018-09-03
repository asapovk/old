import React from 'react';
import { Flexbox, Viewport } from '../../src';

class FlexboxStory extends React.Component {

    render() {
        return (
            <Viewport style={{ padding: 20 }}>
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox justifyContent="center" style={{ background: "white" }} flex={1}>
                        <div style={{ background: "#333", padding: 10 }}>div</div>
                        <div style={{ background: "#666", padding: 10 }}>div</div>
                        <div style={{ background: "#999", padding: 10 }}>div</div>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="center"`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox justifyContent="flex-start" style={{ background: "white" }} flex={1}>
                        <div style={{ background: "#333", padding: 10 }}>div</div>
                        <div style={{ background: "#666", padding: 10 }}>div</div>
                        <div style={{ background: "#999", padding: 10 }}>div</div>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="flex-start" (default)`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox justifyContent="space-between" style={{ background: "white" }} flex={1}>
                        <div style={{ background: "#333", padding: 10 }}>div</div>
                        <div style={{ background: "#666", padding: 10 }}>div</div>
                        <div style={{ background: "#999", padding: 10 }}>div</div>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="space-between"`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox justifyContent="space-around" style={{ background: "white" }} flex={1}>
                        <div style={{ background: "#333", padding: 10 }}>div</div>
                        <div style={{ background: "#666", padding: 10 }}>div</div>
                        <div style={{ background: "#999", padding: 10 }}>div</div>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="space-around"`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox justifyContent="space-evenly" style={{ background: "white" }} flex={1}>
                        <div style={{ background: "#333", padding: 10 }}>div</div>
                        <div style={{ background: "#666", padding: 10 }}>div</div>
                        <div style={{ background: "#999", padding: 10 }}>div</div>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} justifyContent="space-evenly"`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox style={{ background: "white" }} flex={1} p={40}>
                        <Flexbox style={{ background: "#333" }} pb={20} flex={1}>{`pb={20} flex={1}`}</Flexbox>
                        <Flexbox style={{ background: "#666" }} pl={20} flex={1}>{`pl={20} flex={2}`}</Flexbox>
                        <Flexbox style={{ background: "#999" }} pt={20} flex={1}>{`pt={20} flex={3}`}</Flexbox>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} p={40}"`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox column style={{ background: "white" }} flex={1}>
                        <Flexbox style={{ background: "#333" }} p={20} flex={1}>div</Flexbox>
                        <Flexbox style={{ background: "#666" }} p={20} flex={1}>div</Flexbox>
                        <Flexbox style={{ background: "#999" }} p={20} flex={1}>div</Flexbox>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} column`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
                <Flexbox style={{ border: "10px solid #000" }}>
                    <Flexbox column style={{ background: "white" }} flex={1}>
                        <Flexbox style={{ background: "#333" }} p={20} alignSelf="flex-end">alignSelf="flex-end"</Flexbox>
                        <Flexbox style={{ background: "#666" }} p={20} alignSelf="flex-start">alignSelf="flex-start"</Flexbox>
                        <Flexbox style={{ background: "#999" }} p={20} alignSelf="center">alignSelf="center"</Flexbox>
                        <Flexbox style={{ background: "#CCC" }} p={20} alignSelf="stretch">alignSelf="stretch" (default)</Flexbox>
                        <div style={{ color: "#333", fontSize: 12, position: "absolute", padding: 5, right: 0, top: 0, background: "rgba(255,255,255,0.5)" }}>{`flex={1} column`}</div>
                    </Flexbox>
                </Flexbox>
                <br />
            </Viewport>
        )
    }
}

export default FlexboxStory