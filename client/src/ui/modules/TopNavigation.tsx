import { Button } from "@/components/ui/button";
import { useDojo } from "../../DojoContext"
import { getEntityIdFromKeys } from "@/dojo/createSystemCalls";
import { useComponentValue } from "@dojoengine/react";
import { useQueryParams } from "@/dojo/useQueryParams";
import { shortString } from "starknet";

export const TopNavigation = () => {
    const { clear, game_id } = useQueryParams();

    const {
        setup: {
            components: { GoldBalance, Player },
        },
        account: { account }
    } = useDojo();

    let entityId = getEntityIdFromKeys([BigInt(game_id), BigInt(account.address)]);

    const gold_balance = useComponentValue(GoldBalance, entityId);
    const player = useComponentValue(Player, entityId);

    return (<>

        <div className="flex justify-between">
            <h5>Game {game_id}</h5>
            <div className="flex">
                <img className="w-8 mr-3" src={'/images/people/monk_head.png'} alt="" />
                <h5>{shortString.decodeShortString(player?.name.toString() || '0')}</h5>
            </div>

            <div className="flex">
                <img className="w-8 mr-3" src={'/images/items/purse/purse.png'} alt="" />
                <h5>Gold: {gold_balance?.balance}</h5>
            </div>

            <Button size={'sm'} variant={'ghost'} onClick={clear}>Lobby</Button>
        </div>

    </>)
}