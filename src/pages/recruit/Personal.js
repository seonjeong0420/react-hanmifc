import '../../assets/scss/components/layout/_table.scss';
import './recruit.scss';

const Personal = () => {
  return (
    <>
      <section className="personal personal-list">
        <h2 className="subsection__title">인재상</h2>
        <p className="subsection__desc">더 나은 미래를 이끌어가는 창조와 도전정신을 가진 글로벌 인재</p>
        <dl className="personal-list__hr">
          <dt><strong>엘리트 한미인像</strong> 열 가지 덕목</dt>
          <dd>
            <ol>
              <li>기본을 지키고 원칙을 중요시하는 사람</li>
              <li>적극적이고 창의적인 사람</li>
              <li>과거 틀에서 고정관념을 깨는 사람</li>
              <li>인내심과 집념, 성취욕이 강한 사람</li>
              <li>성실과 책임감으로 신뢰 받는 사람</li>
              <li>이기적인 자기중심보다 조직을 중요시하는 사람</li>
              <li>매사에 용의 주도하고 면밀한 사람</li>
              <li>모든 일을 깊이깊이 생각하면서 일하는 사람</li>
              <li>일에 열정을 가지고 몰두하는 사람</li>
              <li>최선을 다해 땀 흘리는 사람</li>
            </ol>
          </dd>
        </dl>
      </section>
      <section className="personal personal-program">
        <h2 className="subsection__title">인재육성</h2>
        <p className="subsection__desc">엘리트 한미인 양성을 위한 체계적인 프로그램</p>
        <div className="personal-program__info">
          <dl>
            <dt>핵심가치 내재화</dt>
            <dd>
              <ul>
                <li>경영이념, 핵심가치 내재화 교육 프로그램</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>자기 주도 학습</dt>
            <dd>
              <ul>
                <li>자기 계발 지원</li>
                <li>학습조직화 지원</li>
                <li>C.I.Q 제도 운영 등</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>직무</dt>
            <dd>
              <ul>
                <li>GMP 교육</li>
                <li>해외박람회 및 학술세미나 참가 지원 등</li>
                <li>체계적인 OJT교육</li>
                <li>외부 전문기관 실무교육</li>
                <li>SME 제도 운영</li>
                <li>순환보직제도, 사내공모제도 등</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>한미 리더십 교육</dt>
            <dd>
              <ul>
                <li>직책별 리더십 교육</li>
                <li>팀장 MBA 교육</li>
                <li>핵심인재 양성교육</li>
                <li>상급학교 지원 제도</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>법정교육</dt>
            <dd>
              <ul>
                <li>성희롱 예방교육</li>
                <li>직장 내 괴롭힘 방지 교육</li>
                <li>장애인 인식개선 교육</li>
                <li>정보보안교육</li>
                <li>산업안전보건환경 교육 등</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>공통역량 교육</dt>
            <dd>
              <ul>
                <li>외국어 교육</li>
                <li>북러닝 교육 등</li>
              </ul>
            </dd>
          </dl>
        </div>
      </section>
      <section className="personal personal-reward">
        <h2 className="subsection__title">평가 및 보상</h2>
        <p className="subsection__desc">혁신인재를 양성하고 지원하는 성과평과 보상정책</p>
        <dl>
          <dt>공정한 성과평가</dt>
          <dd>
            <ul>
              <li>공정한 성과평가를 위하여 직급별 평가기준에 따라 다면평가를 실시합니다.</li>
              <li>평가를 통한 인재육성을 위하여 평가 피드백을 바탕으로 성장기회를 제공합니다.</li>
            </ul>
          </dd>
          <dt>공정한 보상</dt>
          <dd>
            <ul>
              <li>평가결과를 바탕으로 승진, 보상, 교육 등 다양한 혜택이 제공됩니다.</li>
            </ul>
          </dd>
        </dl>
      </section>
      <section className="personal personal-worklife">
        <h2 className="subsection__title">복리후생</h2>
        <p className="subsection__desc">일•생활 균형과 성장을 적극 지원하는 복리후생제도</p>
        <table className="com-table">
          <colgroup>
            <col style={{width:"30%"}} />
            <col style={{width:"auto"}} />
          </colgroup>
          <thead>
            <tr>
              <th>카테고리</th>
              <th>정책</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>역량강화 및 자기 계발</td>
              <td>
                <ul>
                  <li>상급학교 진학 지원</li>
                  <li>MBA 운영</li>
                  <li>사내 외국어 강좌 운영</li>
                  <li>자기 계발 적극 지원</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>일•생활 균형 지원</td>
              <td>
                <ul>
                  <li>경조사 지원</li>
                  <li>출산 축하 지원</li>
                  <li>자녀 학자금 지원</li>
                  <li>생일 축하 지원</li>
                  <li>건강검진 지원(연 1회)</li>
                  <li>장기근속자 포상</li>
                  <li>리프레쉬 휴가 및 콘도 지원</li>
                  <li>유명 호텔 및 콘도 임직원 할인</li>
                  <li>문화의 날, 플리마켓 등 이벤트 진행</li>
                  <li>동아리 운영 진원</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>업무환경</td>
              <td>
                <ul>
                  <li>사내 북카페 운영</li>
                  <li>여성친화 근무환경 조성(여성전용 휴게실 및 수유실)</li>
                  <li>사우회 운영</li>
                  <li>셔틀버스 및 피복 지원</li>
                  <li>사내식당 운영</li>
                  <li>유연근로제 운영</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Personal;