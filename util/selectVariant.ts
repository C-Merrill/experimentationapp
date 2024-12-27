export default function<TVariant extends {weight: number}>(variants:TVariant[], userId: number): TVariant {
    const weightTotal = variants.map(v => v.weight).reduce((sum, w) => sum + w);
    let segmentIndex = userId % weightTotal;
    let i = 0;
    console.log(segmentIndex)
    do {
        var activeVariant = variants[i++];
        segmentIndex -= activeVariant.weight;
    } while (segmentIndex >= 0)
    return activeVariant;
}