import styled, { css } from 'styled-components';
import bgTitle from '../../assets/images/product/img_peg.jpg';

const ContPEG = ({idx}) => {
  var Title = styled.h3`
    position:relative;
    height:577px;
    padding:72px 0 0 95px;
    background:url(${bgTitle});
    box-sizing:border-box;
    font-size:3.2rem;
    span {
      position:absolute;
      top:50%;
      left:50%;
      margin:5.5rem 0 0 1rem;
      color:#fff;
      font-size:1.4rem;
      font-weight:400;
    }
  `;

  var Peg = styled.div`
    margin:10rem;
    li {
      margin:10rem 0;
    }
    dl {
      display:flex;
      justify-content:stretch;
      align-items:flex-start;
      line-height:1.6;
    }
    dt {
      flex-basis:26rem;
      flex-shrink:0;
      font-size:2.4rem;
      font-weight:700;
    }
    dd {
      font-size:1.6rem;
      letter-spacing:-.025rem;
    }
  `;

  return (
    <div id={idx} className="research-contents">
      <Title className="research-title">GMP 규정에 따른 PEG 유도체 제조,<br />고품질의 PEG 유도체 제공<span>풍부한 PEG 유도체 합성 기술<br />& GMP 설비 구축</span></Title>
      <Peg>
        <ol>
          <li>
            <dl>
              <dt>독자적인 PEG 유도체 제조 기술</dt>
              <dd>한미정밀화학의 기술을 바탕으로 GMP 시설 에서 우수한 품질의 PEG 제품들을 생산(PEGylated Peptide의 다양한 PEG 유도체, mRNA의 PEG Lipid 등</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Polyethylene glycol (PEG)의 유도체</dt>
              <dd>다양한 바이오 의약품, mRNA 백신 및 치료제, ADC’ 약물에 사용되는 고분자 물질 (PEG 3.4K, PEG 10K 등)</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Heterobifunctional PEG 합성</dt>
              <dd>고객의 요구에 맞추어 고부가가치의 Heterobifunctional PEG 제품 제조할 수 있는 능력 보유</dd>
            </dl>
          </li>
        </ol>
      </Peg>
    </div>
  )
}

export default ContPEG;
