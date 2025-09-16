// Sample data for the Catholic Spiritual Resources app

const bibleVerses = [
    {
        text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        reference: "Jeremiah 29:11"
    },
    {
        text: "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.",
        reference: "Deuteronomy 31:6"
    },
    {
        text: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
        reference: "Proverbs 3:5"
    },
    {
        text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
        reference: "Romans 8:28"
    },
    {
        text: "The Lord is my shepherd; I shall not want.",
        reference: "Psalm 23:1"
    },
    {
        text: "Come to me, all who labor and are heavy laden, and I will give you rest.",
        reference: "Matthew 11:28"
    },
    {
        text: "I can do all things through him who strengthens me.",
        reference: "Philippians 4:13"
    },
    {
        text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
        reference: "Isaiah 40:31"
    }
];

const prayers = [
    {
        name: "Our Father",
        text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."
    },
    {
        name: "Hail Mary",
        text: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
    },
    {
        name: "Glory Be",
        text: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."
    },
    {
        name: "Angel of God",
        text: "Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen."
    },
    {
        name: "Apostles' Creed",
        text: "I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; he descended to the dead. On the third day he rose again; he ascended into heaven, he is seated at the right hand of the Father, and he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen."
    },
    {
        name: "Prayer to Saint Michael",
        text: "Saint Michael the Archangel, defend us in battle. Be our defense against the wickedness and snares of the Devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls. Amen."
    }
];

const saints = [
    {
        name: "Saint Francis of Assisi",
        info: "Patron saint of animals and ecology. Known for his devotion to nature and the poor. Feast day: October 4th.",
        description: "Founded the Franciscan order and lived a life of radical poverty and service. He received the stigmata and is known for his love of creation."
    },
    {
        name: "Saint Teresa of Calcutta (Mother Teresa)",
        info: "Patron saint of the poor and sick. Served in the slums of Calcutta. Feast day: September 5th.",
        description: "Dedicated her life to caring for the poorest of the poor in India. Nobel Peace Prize winner and champion of the dignity of human life."
    },
    {
        name: "Saint Thomas Aquinas",
        info: "Patron saint of students and scholars. Great theologian and philosopher. Feast day: January 28th.",
        description: "Doctor of the Church known for his theological writings, especially the Summa Theologica. Harmonized Aristotelian philosophy with Christian theology."
    },
    {
        name: "Saint Joan of Arc",
        info: "Patron saint of France and soldiers. Led French army against English occupation. Feast day: May 30th.",
        description: "Received visions from saints and led France to several military victories during the Hundred Years' War. Martyred at age 19."
    },
    {
        name: "Saint Michael the Archangel",
        info: "Archangel and protector. Leader of God's army against Satan. Feast day: September 29th.",
        description: "Chief of the archangels, often depicted with a sword defeating Satan. Protector of the Church and guide of souls to heaven."
    },
    {
        name: "Saint Thérèse of Lisieux",
        info: "Known as the 'Little Flower.' Patron of missionaries. Feast day: October 1st.",
        description: "Doctor of the Church who taught the 'little way' of spiritual childhood. Died young but left a profound spiritual legacy."
    },
    {
        name: "Saint Joseph",
        info: "Foster father of Jesus and patron of workers. Feast day: March 19th.",
        description: "Protector of the Holy Family, patron of the universal Church, and model of fatherhood and humble service."
    },
    {
        name: "Saint Mary Magdalene",
        info: "First witness to the Resurrection. Patron of penitent sinners. Feast day: July 22nd.",
        description: "Faithful follower of Jesus who stood by the cross and was the first to see the risen Christ on Easter morning."
    }
];

const massVideos = [
    {
        title: "Daily Mass - Catholic TV",
        url: "https://www.youtube.com/results?search_query=daily+mass+catholic+tv",
        description: "Live daily Mass celebration from Catholic Television Network"
    },
    {
        title: "Sunday Mass - Vatican",
        url: "https://www.youtube.com/results?search_query=vatican+sunday+mass",
        description: "Sunday Mass celebrations from Vatican City with the Holy Father"
    },
    {
        title: "EWTN Daily Mass",
        url: "https://www.youtube.com/results?search_query=ewtn+daily+mass",
        description: "Daily Mass from the Eternal Word Television Network"
    },
    {
        title: "Catholic Mass Online",
        url: "https://www.youtube.com/results?search_query=catholic+mass+online+today",
        description: "Various online Mass celebrations from around the world"
    },
    {
        title: "Latin Mass (Extraordinary Form)",
        url: "https://www.youtube.com/results?search_query=latin+mass+traditional",
        description: "Traditional Latin Mass celebrations in the Extraordinary Form"
    },
    {
        title: "World Youth Day Masses",
        url: "https://www.youtube.com/results?search_query=world+youth+day+mass",
        description: "Special Masses from World Youth Day celebrations"
    }
];

const liturgicalPrayers = [
    {
        name: "Kyrie Eleison",
        text: "Lord, have mercy. Christ, have mercy. Lord, have mercy."
    },
    {
        name: "Gloria in Excelsis Deo",
        text: "Glory to God in the highest, and on earth peace to people of good will. We praise you, we bless you, we adore you, we glorify you, we give you thanks for your great glory, Lord God, heavenly King, O God, almighty Father. Lord Jesus Christ, Only Begotten Son, Lord God, Lamb of God, Son of the Father, you take away the sins of the world, have mercy on us; you take away the sins of the world, receive our prayer; you are seated at the right hand of the Father, have mercy on us. For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen."
    },
    {
        name: "Sanctus",
        text: "Holy, Holy, Holy Lord God of hosts. Heaven and earth are full of your glory. Hosanna in the highest. Blessed is he who comes in the name of the Lord. Hosanna in the highest."
    },
    {
        name: "Agnus Dei",
        text: "Lamb of God, you take away the sins of the world, have mercy on us. Lamb of God, you take away the sins of the world, have mercy on us. Lamb of God, you take away the sins of the world, grant us peace."
    },
    {
        name: "Act of Contrition",
        text: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of heaven and the pains of hell, but most of all because they offend Thee, my God, Who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen."
    },
    {
        name: "Prayer Before Communion",
        text: "Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed."
    },
    {
        name: "Prayer After Communion",
        text: "Soul of Christ, sanctify me. Body of Christ, save me. Blood of Christ, inebriate me. Water from the side of Christ, wash me. Passion of Christ, strengthen me. O good Jesus, hear me. Within your wounds hide me. Never let me be separated from you. From the malicious enemy defend me. In the hour of my death call me, and bid me come unto you, that I may praise you with your saints, for all eternity. Amen."
    }
];