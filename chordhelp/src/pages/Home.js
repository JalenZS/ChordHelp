import styles from './pages.module.css';
import { useState , useEffect, useCallback } from 'react';

const Home = () => {
    const [isActiveG, setActiveG] = useState(true);
    const [isActiveU, setActiveU] = useState(false);
    const [isActiveB, setActiveB] = useState(false);
    const [chord, setChord] = useState('-X-\n-X-');
    const [instrument, setInstrument] = useState('g-');

    function toggleActiveG() {
        setActiveG(true);
        setActiveU(false);
        setActiveB(false);
        setInstrument('g-')
        updateChord();
    }

    function toggleActiveU() {
        setActiveG(false);
        setActiveU(true);
        setActiveB(false);
        setInstrument('u-')
        updateChord();
    }

    function toggleActiveB() {
        setActiveG(false);
        setActiveU(false);
        setActiveB(true);
        setInstrument('b-')
        updateChord();
    }

    const updateChord = useCallback(() => {
        var combined = instrument + document.getElementById('chords').value + document.getElementById('type').value + document.getElementById('modifiers').value + document.getElementById('versions').value;
        switch(combined){
            case 'g-cnnv1':
                setChord(`E  O|---|---|---|---|---|---|---|---|---|---|---|---| B  -|-O-|---|---|---|---|---|---|---|---|---|---|---| G  O|---|---|---|---|---|---|---|---|---|---|---|---| D  -|---|-O-|---|---|---|---|---|---|---|---|---|---| A  -|---|---|-O-|---|---|---|---|---|---|---|---|---| E  X|---|---|---|---|---|---|---|---|---|---|---|---| Open|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|10t|11t|12t|`);
                break;
            case 'g-cnmav1':
                setChord(`E  O|---|---|---|---|---|---|---|---|---|---|---|---| B  -|-O-|---|---|---|---|---|---|---|---|---|---|---| G  O|---|---|---|---|---|---|---|---|---|---|---|---| D  -|---|-O-|---|---|---|---|---|---|---|---|---|---| A  -|---|---|-O-|---|---|---|---|---|---|---|---|---| E  X|---|---|---|---|---|---|---|---|---|---|---|---| Open|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|10t|11t|12t|`);
                break;
            default:
                setChord(`E  -|---|---|---|---|---|---|---|---|---|---|---|---| B  -|---|---|---|---|---|---|---|---|---|---|---|---| G  -|---|---|---|---|---|---|---|---|---|---|---|---| D  -|---|---|---|---|---|---|---|---|---|---|---|---| A  -|---|---|---|---|---|---|---|---|---|---|---|---| E  -|---|---|---|---|---|---|---|---|---|---|---|---| Open|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|10t|11t|12t|`);
                break;
        }
    }, [instrument]);
    
    useEffect(() => {
        updateChord()
    },[updateChord])

    return(
        <div className={styles.pageContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.titleText}>
                    ChordHelp
                </div>
            </div>
            <div className={styles.selectorTitleContainer}>
                <div className={styles.subtitleText}>
                    Select Instrument
                </div>
            </div>
            <div className={styles.selectorContainer1}>
                <div className={isActiveG ? styles.selectoractive : styles.selector} onClick={toggleActiveG}>
                    <div className={styles.selectorName}>Guitar</div>
                </div>
                <div className={isActiveU ? styles.selectoractive : styles.selector} onClick={toggleActiveU}>
                    <div className={styles.selectorName}>Ukulele</div>
                </div>
                <div className={isActiveB ? styles.selectoractive : styles.selector} onClick={toggleActiveB}>
                    <div className={styles.selectorName}>Banjo</div>
                </div>
            </div>
            <div className={styles.selectorTitleContainer}>
                <div className={styles.subtitleText}>
                    Select Chord
                </div>
            </div>
            <div className={styles.selectorContainer2}>
                <select name="chords" id="chords" onChange={updateChord}>
                    <option value="n">-</option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                    <option value="e">E</option>
                    <option value="f">F</option>
                    <option value="g">G</option>
                </select>
                <select name="type" id="type" onChange={updateChord}>
                    <option value="n">-</option>
                    <option value="#">#</option>
                    <option value="b">b</option>
                </select>
                <select name="modifiers" id="modifiers" onChange={updateChord}>
                    <option value="n">-</option>
                    <option value="ma">Maj</option>
                    <option value="mi">Min</option>
                    <option value="7">7</option>
                </select>
            </div>
            <div className={styles.selectorTitleContainer}>
                <div className={styles.subtitleText}>
                    View Alternate Chord Versions
                </div>
            </div>
            <div className={styles.selectorContainer2}>
                <select name="versions" id="versions" onChange={updateChord}>
                    <option value="v1">v1</option>
                    <option value="v2">v2</option>
                    <option value="v3">v3</option>
                </select>
            </div>
            <textarea 
                value={chord} 
                readOnly
                rows={7}
                cols={53}
            />
        </div>
    )
}

export default Home;