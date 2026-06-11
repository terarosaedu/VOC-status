// 월별 대시보드 데이터 저장소
const dashboardData = {
    "1월": {
        titleMonth: "VOC 현황 . 2026년 1월",
        kpi: {
            totalVoc: "1,560",
            general: "1,387",
            claim: "45",
            online: "38",
            onlineYoy: "YoY 0.0%",
            onlineYoyColor: "#555", 
            store: "6",
            storeYoy: "▼ YoY -57.1% 감소",
            storeYoyColor: "#0056b3", 
            hq: "*본사 클레임 1건",
            
            mtdTotalText: "",
            mtdOnlineText: "",
            mtdStoreText: ""
        },
        channel: {
            labels: ['전화', '홈페이지', '챗봇', '이메일'],
            data: [68.6, 22.8, 8.6, 0.0],
            counts: [1070, 356, 134, 0],
            colors: ['#1c3664', '#4a7c59', '#f3a683', '#dcdde1']
        },
        dept: {
            labels: ['생산물류팀', '구매전략팀', '영업팀', '이커머스팀'],
            data: [31, 8, 3, 2],
            tableHtml: `
                <tr><td>생산물류팀</td><td class="text-left">오제공(누락) 29, 배송불만 2</td><td><strong>31</strong></td></tr>
                <tr><td>구매전략팀</td><td class="text-left">상품품질 8</td><td><strong>8</strong></td></tr>
                <tr><td>영업팀</td><td class="text-left">이용불편 2, 불친절 1</td><td><strong>3</strong></td></tr>
                <tr><td>이커머스팀</td><td class="text-left">프로모션 1, 시스템오류 1</td><td><strong>2</strong></td></tr>
            `
        },
        onlinePie: {
            labels: ['오제공(누락)', '상품품질', '배송불만', '시스템오류', '프로모션'],
            data: [76.3, 13.2, 5.3, 2.6, 2.6],
            counts: [29, 5, 2, 1, 1],
            colors: ['#4a81d4', '#1c3664', '#a4b0be', '#2ed573', '#eccc68']
        },
        storePie: {
            labels: ['상품품질(MD)', '매장이용불편', '불친절'],
            data: [50.0, 33.3, 16.7],
            counts: [3, 2, 1],
            colors: ['#1c3664', '#4a81d4', '#a4b0be']
        }
    },

    "2월": {
        titleMonth: "VOC 현황 . 2026년 2월",
        kpi: {
            totalVoc: "2,855",
            general: "2,549",
            claim: "82",
            online: "68",
            onlineYoy: "▲ YoY +15.3% 증가",
            onlineYoyColor: "#CE0019",
            store: "11",
            storeYoy: "▼ YoY -35.3% 감소",
            storeYoyColor: "#0056b3",
            
            hq: "", 
            mtdTotalText: "[MTD] VOC 1,295건<br><span style='font-size: 11px; font-weight: normal; color: #555;'>(일반 1,162건 / 클레임 37건)</span><br><span style='font-size: 11px; font-weight: normal; color: #555;'>*본사 클레임 2건</span>",
            mtdOnlineText: "[MTD] 30건",
            mtdStoreText: "[MTD] 5건"
        },
        channel: {
            labels: ['전화', '홈페이지', '챗봇', '이메일'],
            data: [69.1, 20.6, 10.3, 0.0],
            counts: [1867, 279, 278, 0],
            colors: ['#1c3664', '#4a7c59', '#f3a683', '#dcdde1']
        },
        dept: {
            labels: ['생산물류팀', '구매전략팀', '영업팀', '이커머스팀'],
            data: [59, 14, 9, 2],
            // 💡 2월 상세 데이터 이미지에 맞게 수정 반영
            tableHtml: `
                <tr><td>생산물류팀</td><td class="text-left">오제공(누락) 47, 배송불만 11, 원두품질 1</td><td><strong>59</strong></td></tr>
                <tr><td>구매전략팀</td><td class="text-left">상품품질 14</td><td><strong>14</strong></td></tr>
                <tr><td>영업팀</td><td class="text-left">매장이용불편 3, 불친절 3, 오제공(누락) 2, 응대미흡 1</td><td><strong>9</strong></td></tr>
                <tr><td>이커머스팀</td><td class="text-left">프로모션 1, 시스템오류 1</td><td><strong>2</strong></td></tr>
            `
        },
        onlinePie: {
            labels: ['오제공(누락)', '상품품질', '배송불만', '원두품질', '시스템오류', '프로모션'],
            data: [65.3, 15.3, 15.3, 1.4, 1.4, 1.4],
            counts: [47, 11, 11, 1, 1, 1],
            colors: ['#4a81d4', '#1c3664', '#a4b0be', '#7bed9f', '#2ed573', '#eccc68']
        },
        storePie: {
            labels: ['매장이용불편', '불친절', '상품품질(MD)', '오제공(누락)', '응대미흡'],
            data: [25.0, 25.0, 25.0, 16.7, 8.3],
            counts: [3, 3, 3, 2, 1],
            colors: ['#4a81d4', '#1c3664', '#f39c12', '#a4b0be', '#f1c40f']
        }
    },

    "3월": {
        titleMonth: "VOC 현황 . 2026년 3월",
        kpi: {
            totalVoc: "4,129",
            general: "3,704",
            claim: "117",
            online: "89",
            onlineYoy: "▲ YoY +4.7% 증가",
            onlineYoyColor: "#CE0019",
            store: "25",
            storeYoy: "▼ YoY -3.8% 감소",
            storeYoyColor: "#0056b3",
            
            hq: "", 
            mtdTotalText: "[MTD] VOC 1,274건<br><span style='font-size: 11px; font-weight: normal; color: #555;'>(일반 1,155건 / 클레임 35건)</span>",
            mtdOnlineText: "[MTD] 21건",
            mtdStoreText: "[MTD] 14건"
        },
        channel: {
            labels: ['전화', '홈페이지', '챗봇', '이메일'],
            data: [69.7, 20.1, 10.1, 0.1],
            counts: [2758, 797, 401, 3],
            colors: ['#1c3664', '#4a7c59', '#f3a683', '#dcdde1']
        },
        dept: {
            labels: ['생산물류팀', '구매전략팀', '영업팀', '이커머스팀'],
            data: [65, 27, 20, 2],
            // 💡 3월 상세 데이터 이미지에 맞게 수정 반영 (TEA이물 추가 등)
            tableHtml: `
                <tr><td>생산물류팀</td><td class="text-left">오제공(누락) 51, 배송불만 12, 원두품질 1, 시스템오류 1, 프로모션 1, TEA이물 1</td><td><strong>65</strong></td></tr>
                <tr><td>구매전략팀</td><td class="text-left">상품품질 27</td><td><strong>27</strong></td></tr>
                <tr><td>영업팀</td><td class="text-left">매장이용불편 6, 응대미흡 4, 불친절 3, 오제공(누락) 3, 음료이물 2, 대기불만 2</td><td><strong>20</strong></td></tr>
                <tr><td>이커머스팀</td><td class="text-left">프로모션 1, 시스템오류 1</td><td><strong>2</strong></td></tr>
            `
        },
        onlinePie: {
            labels: ['오제공(누락)', '상품품질', '배송불만', '시스템오류', '프로모션', '원두품질', '이물질'],
            data: [57.3, 24.7, 13.5, 1.1, 1.1, 1.1, 1.1],
            counts: [51, 22, 12, 1, 1, 1, 1],
            colors: ['#4a81d4', '#1c3664', '#a4b0be', '#2ed573', '#eccc68', '#7bed9f', '#ff7f50']
        },
        storePie: {
            labels: ['매장이용불편', '상품품질(MD)', '응대미흡', '불친절', '오제공(누락)', '음료이물', '대기불만'],
            data: [24.0, 20.0, 16.0, 12.0, 12.0, 8.0, 8.0],
            counts: [6, 5, 4, 3, 3, 2, 2],
            colors: ['#4a81d4', '#1c3664', '#f1c40f', '#a4b0be', '#f39c12', '#2ecc71', '#3498db']
        }
    },

    "4월": {
        titleMonth: "VOC 현황 . 2026년 4월",
        kpi: {
            totalVoc: "5,433",
            general: "4,898",
            claim: "148",
            online: "110",
            onlineYoy: "▼ YoY -17.3% 감소",
            onlineYoyColor: "#0056b3",
            store: "35",
            storeYoy: "▼ YoY -23.9% 감소",
            storeYoyColor: "#0056b3",
            
            hq: "", 
            mtdTotalText: "[MTD] VOC 1,304건<br><span style='font-size: 11px; font-weight: normal; color: #555;'>(일반 1,194건 / 클레임 31건)</span>",
            mtdOnlineText: "[MTD] 21건",
            mtdStoreText: "[MTD] 10건"
        },
        channel: {
            labels: ['전화', '홈페이지', '챗봇', '이메일'],
            data: [69.4, 20.0, 10.6, 0.1],
            counts: [3642, 1047, 554, 4],
            colors: ['#1c3664', '#4a7c59', '#f3a683', '#dcdde1']
        },
        dept: {
            labels: ['생산물류팀', '구매전략팀', '영업팀', '이커머스팀'],
            data: [78, 36, 27, 4],
            tableHtml: `
                <tr><td>생산물류팀</td><td class="text-left">오제공(누락) 57, 배송불만 14, 원두품질 6, TEA이물 1</td><td><strong>78</strong></td></tr>
                <tr><td>구매전략팀</td><td class="text-left">상품품질 36</td><td><strong>36</strong></td></tr>
                <tr><td>영업팀</td><td class="text-left">매장이용불편 8, 오제공(누락) 6, 응대미흡 4, 불친절 4, 대기불만 3, 음료이물 2</td><td><strong>27</strong></td></tr>
                <tr><td>이커머스팀</td><td class="text-left">프로모션 1, 시스템오류 1</td><td><strong>4</strong></td></tr>
            `
        },
        onlinePie: {
            labels: ['오제공(누락)', '상품품질', '배송불만', '원두품질', '시스템오류', '프로모션', '이물질'],
            data: [51.8, 25.5, 12.7, 5.5, 1.8, 1.8, 0.9],
            counts: [57, 28, 14, 6, 2, 2, 1],
            colors: ['#4a81d4', '#1c3664', '#a4b0be', '#7bed9f', '#2ed573', '#eccc68', '#ff7f50']
        },
        storePie: {
            labels: ['매장이용불편', '상품품질(MD)', '오제공(누락)', '응대미흡', '불친절', '대기불만', '음료이물'],
            data: [22.9, 22.9, 17.1, 11.4, 11.4, 8.6, 5.7],
            counts: [8, 8, 6, 4, 4, 3, 2],
            colors: ['#4a81d4', '#1c3664', '#f39c12', '#f1c40f', '#a4b0be', '#3498db', '#2ecc71']
        }
    },

    "5월": {
        titleMonth: "VOC 현황 . 2026년 5월",
        kpi: {
            totalVoc: "6,658",
            general: "6,066",
            claim: "169",
            online: "121",
            onlineYoy: "▼ YoY -21.9% 감소",
            onlineYoyColor: "#0056b3",
            store: "45",
            storeYoy: "▼ YoY -29.7% 감소",
            storeYoyColor: "#0056b3",
            hq: "",

            mtdTotalText: "[MTD] VOC 1,225건<br><span style='font-size: 11px; font-weight: normal; color: #555;'>(일반 1,168건 / 클레임 21건)</span>",
            mtdOnlineText: "[MTD] 11건",
            mtdStoreText: "[MTD] 10건"
        },
        channel: {
            labels: ['전화', '홈페이지', '챗봇', '이메일'],
            data: [70.2, 19.3, 10.5, 0.1],
            counts: [4529, 1243, 675, 5],
            colors: ['#1c3664', '#4a7c59', '#f3a683', '#dcdde1']
        },
        dept: {
            labels: ['생산물류팀', '구매전략팀', '영업팀', '이커머스팀'],
            data: [85, 37, 36, 8],
            tableHtml: `
                <tr><td>생산물류팀</td><td class="text-left">오제공(누락) 59, 배송불만 15, 원두품질 8, 원두이물 3</td><td><strong>85</strong></td></tr>
                <tr><td>구매전략팀</td><td class="text-left">상품품질 37</td><td><strong>37</strong></td></tr>
                <tr><td>영업팀</td><td class="text-left">매장이용불편 10, 오제공 8, 불친절 6, 응대미흡 4, 대기불만 3, 음료이물 5</td><td><strong>36</strong></td></tr>
                <tr><td>이커머스팀</td><td class="text-left">프로모션 3, 시스템오류 3, 이용불편 2</td><td><strong>8</strong></td></tr>
            `
        },
        onlinePie: {
            labels: ['오제공(누락)', '상품품질', '배송불만', '원두품질', '시스템오류', '프로모션', '이용불편', '원두이물'],
            data: [50, 24, 12, 6, 3, 2, 2, 1],
            counts: [61, 29, 15, 7, 3, 3, 2, 1],
            colors: ['#4a81d4', '#1c3664', '#a4b0be', '#7bed9f', '#2ed573', '#eccc68', '#ffa502', '#ff7f50']
        },
        storePie: {
            labels: ['이용불편', '상품품질', '오제공(누락)', '불친절', '응대미흡', '대기불만', '음료이물', '원두품질'],
            data: [24, 18, 18, 13, 11, 7, 7, 2],
            counts: [11, 8, 8, 6, 5, 3, 3, 1],
            colors: ['#4a81d4', '#1c3664', '#f39c12', '#a4b0be', '#f1c40f', '#3498db', '#2ecc71', '#95a5a6']
        }
    }
};