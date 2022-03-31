import styled, { css } from 'styled-components';
import imgMran from '../../assets/images/product/img_mran.png';
import imgSystem1 from '../../assets/images/product/img_mran1.jpg';
import imgSystem2 from '../../assets/images/product/img_mran2.jpg';

const ContMRNA = ({idx}) => {
  var Mrna = styled.div`
    .material {
      position:relative;
      height:37.7rem;
      margin:0 auto;
      background:url(${imgMran}) no-repeat center;
      dt, dd {
        font-size:1.6rem;
      }
      dt {
        font-weight:700;
      }
      &__lnp {
        position:absolute;
        top:8rem;
        left:12rem;
        text-align:right;
      }
      &__ntp {
        position:absolute;
        top:8rem;
        right:2rem;
      }
      &__blank {
        position:absolute;
        bottom:9.3rem;
        left:7rem;
      }
      &__cap {
        position:absolute;
        bottom:9rem;
        right:6rem;
      }
    }

    .system {
      ul {
        display:flex;
        justify-content:stretch;
        align-items:center;
        gap:2rem;
        margin-top:3rem;
      }
    }
  `
  return (
    <div id={idx} className="research-contents">
      <h3 className="research-title">Modified nucleoside와 mRNA 5＇-cap Analog의 제조 및 정제<br />LNP 핵심 원료 개발 및 제조</h3>

      <Mrna>
        <div className="material">
          <ul>
            <li className="material__lnp">
              <dl>
                <dt>LNP</dt>
                <dd>Cationic Lipid / PEG-Lipid</dd>
              </dl>
            </li>
            <li className="material__ntp">
              <dl>
                <dt>NTP</dt>
                <dd>Base-modified NTPs<br />(5-Methyl-CTP,N1-Methylpseudo-UTP)<br />/Sugar-modified NTPs</dd>
              </dl>
            </li>
            <li className="material__blank">
              <dl>
                <dt>&nbsp;</dt>
                <dd>Purification of Oligonucleotides</dd>
              </dl>
            </li>
            <li className="material__cap">
              <dl>
                <dt>mRNA 5'-cap</dt>
                <dd>Research and development and<br />manufacturing of 5'-cap Analog</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div className="c-research-layout system">
          <h4>mRNA 정제 시스템</h4>
          <ul>
            <li><img src={imgSystem1} /></li>
            <li><img src={imgSystem2} /></li>
          </ul>
        </div>
      </Mrna>
    </div>
  )
}

export default ContMRNA;
