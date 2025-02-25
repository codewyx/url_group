import { Avatar, Button, ButtonGroup, List, Skeleton } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import { base, dashboard, bitable } from '@lark-base-open/js-sdk';
import { toMinText, toNormalText } from "../../utils";
import './row.scss'
import { TFunction } from "i18next";
interface IUrlGroupConfig {
    type: 'grid' | 'row',
    table: string | null,
    view: string | null,
    titleRow: string | null,
    iconRow: string | null,
    linkRow: string | null
}
interface IViewerData {
    text: string,
    icon: string,
    link: string
}
export function RowViewer(props: {
    config: IUrlGroupConfig,
    trans: TFunction<"translation", undefined>
}) {
    let [data, setData] = useState<IViewerData[]>([])
    let [light, setIsLight] = useState(document.body.getAttribute('theme-mode') != 'dark')
    useEffect(() => {
        let theme = document.body.getAttribute('theme-mode')
        if (theme == 'dark') {
            setIsLight(false)
        }
        else {
            setIsLight(true)
        }
        bitable.bridge.onThemeChange((e) => {
            setIsLight(e.data.theme.toLocaleLowerCase() != 'dark')
        })
    }, [document.body.getAttribute('theme-mode')])
    async function fetchData() {
        let data: IViewerData[] = []
        let recordList = await (await bitable.base.getTableById(props.config.table!)).getRecordList()
        for (const record of recordList) {

            const title_cell = await record.getCellByField(props.config.titleRow!)
            const title = await title_cell.getValue();
            const icon_cell = await record.getCellByField(props.config.iconRow!)
            const icon = await icon_cell.getValue();
            //  const attachmentUrls = await (await (bitable.base.getTableById(props.config.table!))).getField(icon_cell.getFieldId()).getAttachmentUrls(icon);
            const link_cell = await record.getCellByField(props.config.linkRow!)
            const link = await link_cell.getValue();
            data.push({
                text: toNormalText(title),
                icon: toNormalText(icon/*,"icon",attachmentUrls*/),
                link: toNormalText(link)
            })
        }
        setData(data)
    }
    useEffect(() => {


        fetchData();


    }, [props]); // 空依赖数组意味着这个effect只会在组件挂载后运行一次
    useEffect(() => {
        const update = dashboard.onConfigChange(() => {
            fetchData()
        });
        return () => {
            update();
        }
    }, []);
    const placeholder = (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', rowGap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', columnGap: '30px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', columnGap: '30px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', columnGap: '30px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyItems: "center",
                    columnGap: '10px'
                }}>
                    <Skeleton.Avatar style={{ borderRadius: "10px" }} />
                    <Skeleton.Title style={{ width: 80, marginBottom: 12, marginTop: 12 }} />
                </div>
            </div>
        </div>
    );

    return (
        <List
            style={{ width: "100%" }}
            emptyContent={<Skeleton placeholder={placeholder} loading={true} active></Skeleton>}
            dataSource={data}
            renderItem={item => (
                <List.Item
                    style={{ width: "100%" }}
                    header={<Avatar shape="square" style={{ borderRadius: 12 }} src={item.icon}></Avatar>}
                    main={<p style={{
                        color: light ? 'black' : 'white'
                    }}>{toMinText(12, item.text)}</p>}
                    extra={
                        <Button theme='solid' size='small' type='primary' onClick={() => { window.open(item.link) }}>打开</Button>
                    }
                    align="center"
                />
            )}
        />
    )
}