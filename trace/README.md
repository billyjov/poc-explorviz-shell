# Micro-Frontend 'Trace'


### Start app

```bash
npm run start 
```

Browse `http://localhost:4500`


### Build 

```bash
npm run build
```

### Unit tests

```bash
npm run test
```

### Communication Messages

| Message Name | Message Key | Initiator |  
| --- | --- | ---| 
| _Remove Highlighting_ |`trace:remove-highlighting` | _app.component.ts_|
| _Move Camera_ | `trace:move-camera-to` | _trace-replayer-main.component.ts_ |
| _Highlight Trace_| `trace:highlight-trace` | _trace-replayer-main.component.ts_ |
