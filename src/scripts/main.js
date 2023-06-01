AOS.init();

const dataDoEvento = new Date("May 16, 2024 19:00:00");
const TimeStampDoEvento = dataDoEvento.getTime();

const ContaHora = setInterval(function () {
    const agora= new Date();
    const TimeStampAtual = agora.getTime();

    const DistanciaAteEvento = TimeStampDoEvento - TimeStampAtual;

    const DiaEmMs = 1000  * 60  * 60 * 24;
    const HoraEmMs = 1000  * 60  * 60;
    const MinEmMs = 1000  * 60 ;


    const DiasAteEvento = Math.floor(DistanciaAteEvento / DiaEmMs);
    const horasAteEvento = Math.floor((DistanciaAteEvento % DiaEmMs) / HoraEmMs);
    const minutosAteEvento =Math.floor((DistanciaAteEvento % HoraEmMs) / MinEmMs);
    const segundosAteEvento = Math.floor((DistanciaAteEvento % MinEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${DiasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m e ${segundosAteEvento}s`

    if (DistanciaAteEvento < 0) {
        clearInterval(ContaHora);
        document.getElementById('contador').innerHTML = 'Vish, já passou :/';
    }

}, 1000)